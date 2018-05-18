import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css';

import { Login } from '../../Pages/Login';
import { Newsfeed } from '../../Pages/Newsfeed';
import { SingleTweet } from '../../Pages/Single-Tweet';
import { Header } from '../Header';
import { UserProfile } from '../../Pages/UserProfile';

class Router extends Component {
  render() {
    return (
      <div className="router">
        <Route path="/" render={(props) => ( props.location.pathname !== '/login') && <Header />} />

        <Switch>
          <Route exact={true} path="/" component={Newsfeed} />
          <Route path="/tweet" component={Newsfeed} />
          <Route path="/user/:handle" component={UserProfile} />
          <Route path="/login" component={Login} />
        </Switch>

        {/* Modals - Note might need something behind it as well */}
        <ModalRoute path="/tweet/:id" parentPath="/" component={SingleTweet} />
        <ModalRoute path="/modal" parentPath="/">Test</ModalRoute>

        {/* This is the element that displays the modals */}
        <ModalContainer />
      </div>
    );
  }
}

export {
  Router
};
