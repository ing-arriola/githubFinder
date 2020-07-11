import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
