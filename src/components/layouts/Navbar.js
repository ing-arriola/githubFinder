import React, { Component } from "react";
import PropTypes from "prop-types";
export class Navbar extends Component {
  // This are defaul values for props just in case
  // the class that should provide this component value
  // doesn't provide them
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };
  //   You can also ask for a specif type of data
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
