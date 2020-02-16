import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => {
  const createdAt = new Date(repo.created_at);
  const updatedAt = new Date(repo.updated_at);
  return (
    <li>
      <p>{repo.name}</p>
      <p>Issues: {repo.open_issues}</p>
      <p>Forks: {repo.forks}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Created: {createdAt.toLocaleDateString()}</p>
      <p>Last Update: {updatedAt.toLocaleDateString()}</p>
      <p>Description: {repo.description}</p>
    </li>
  );
};

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open_issues: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Repo;
