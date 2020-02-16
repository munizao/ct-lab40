import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => {
  return (
    <li>
      <p>{repo.name}</p>
      <p>Issues: {repo.open_issues}</p>
      <p>Forks: {repo.forks}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Created: {Date(repo.created_at)}</p>
      <p>Last Update: {Date(repo.updated_at)}</p>
      <p>Description: {repo.description}</p>
    </li>
  );
};

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open_issues: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    stargazers_count: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Repo;
