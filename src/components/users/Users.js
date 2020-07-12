import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  // {
  //   id: "37816437",
  //   login: "ing-arriola",
  //   avatar_url: "https://avatars0.githubusercontent.com/u/37816437?v=4",
  //   html_url: "https://github.com/ing-arriola",
  // }

  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
