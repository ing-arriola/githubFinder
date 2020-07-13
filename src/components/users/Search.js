import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [text, SetText] = useState("");

  const onType = (e) => {
    SetText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Enter the username to search for", "light");
    } else {
      searchUsers(text);
      SetText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search an user.."
          onChange={onType}
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-medium btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
