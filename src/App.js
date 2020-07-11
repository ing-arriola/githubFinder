import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import UserItem from "./components/users/UserItem";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <UserItem />
      </React.Fragment>
    );
  }
}

export default App;
