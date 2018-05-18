import * as React from 'react';
import { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import './style.scss';

class Login extends Component {
  state = {
    toDashboard: false
  };

  render() {
    if (this.state.toDashboard === true) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="login-page">
        <h1>Twityer</h1>
        <form className="login-form">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button className="btn btn--outline" onClick={(e) => { return this.login(e); }}>Log in</button>
        </form>
      </div>
    );
  }

  login(e: React.MouseEvent<HTMLElement>) {
    this.setState({
      toDashboard: true
    });
    
    return false;
  }
}

export {
  Login
};