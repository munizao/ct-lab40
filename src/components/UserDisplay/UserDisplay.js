import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectLoading } from '../../redux/selectors/user-selector';

const UserDisplay = () => {
  const userInfo = useSelector(selectUser);
  const loading = useSelector(selectLoading);

  return (
    <div>
      {loading && 'Loading...'}
      {
        userInfo &&
          <div>
            <div>{userInfo.avatar_url && <img src={userInfo.avatar_url} />}</div>
            <p><a href={userInfo.html_url}>{userInfo.username}</a></p>
            <p>Followers: {userInfo.followers}</p>
            <p>Following: {userInfo.following}</p>
            <p>Public Repos: <a href={userInfo.repos_url}>{userInfo.public_repos}</a></p>
          </div>
      }
    </div>
  );
};

export default UserDisplay;
