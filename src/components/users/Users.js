import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [
      {
        id: "37816437",
        login: "ing-arriola",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/ing-arriola",
      },
      {
        id: "2",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "3",
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <div>{user.login}</div>
        ))}
      </div>
    );
  }
}

export default Users;
