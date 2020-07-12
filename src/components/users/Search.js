import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onType = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search an user.." />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
            onChange={this.onType}
          />
        </form>
      </div>
    );
  }
}

export default Search;
