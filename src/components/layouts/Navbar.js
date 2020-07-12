import React from "react";
import PropTypes from "prop-types";
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

// This are defaul values for props just in case
// the class that should provide this component value
// doesn't provide them
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
//   You can also ask for a specif type of data
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
