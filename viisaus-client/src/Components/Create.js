import React, { Component } from 'react';
import { addNewUser } from '../ServiceDesk';
import './Create.css';

class Create extends Component {
  state = {
    createFailed: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  nameChanged = (e) => this.setState({ name: e.target.value });

  passwordChanged = (e) => this.setState({ password: e.target.value })

  addUser = (state) => {
    addNewUser(state, function (response) {
      console.log(response);
      if (response === 401) {
        alert("Try again, Nickname is not available!")
      }
      else {
        this.props.backToLogin();
      }

    }.bind(this));
  }

  CreateUser = (e) => {
    e.preventDefault();
    this.addUser(this.state);
    this.setState({ name: '', password: '' });
  }

  render() {
    return (
      <div className="create" id="alert">

        <form onSubmit={this.CreateUser}>
          <input className="teksti" placeholder="Username" value={this.state.name} onChange={this.nameChanged} required minLength="3" maxLength="50" />  <br />
          <input className="teksti" placeholder="Password" type="password" value={this.state.password} onChange={this.passwordChanged} required minLength="6" maxLength="50" />
          <input className="nappi2" type="submit" value="Create account" onClick={this.handleClick} />

        </form>
      </div>
    );
  }
}

export default Create;
