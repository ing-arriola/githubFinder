import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layouts/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ getUserRepos, repos, match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="user avatar"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{login}</p>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <ul>
            <li>
              {blog && (
                <Fragment>
                  <p>Website: {blog}</p>
                </Fragment>
              )}
            </li>
          </ul>
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>{" "}
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-success">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gist: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
