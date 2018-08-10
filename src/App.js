import React, { Component } from "react";
import "./App.css";
import Homepage from './Homepage';
import withGithub from './GithubApi';

const  {clientId} = require('./env.json');
class App extends Component {

  render() {
    const WrappedHomePage = withGithub(Homepage, clientId);
    return (
      <WrappedHomePage />
    );
  }
}

export default App;
