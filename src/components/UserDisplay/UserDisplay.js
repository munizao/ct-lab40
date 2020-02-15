import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectLoading } from '../../redux/selectors/user-selector';
import styles from './UserDisplay.css';

const UserDisplay = () => {
  const loading = useSelector(selectLoading);
  const loadingDOM = loading && <span>Loading...</span>;
  const userInfo = useSelector(selectUser);
  const userInfoDOM = userInfo &&
  <>
    <div>{userInfo.avatar_url && <img src={userInfo.avatar_url} />}</div>
    <p><a href={userInfo.html_url}>{userInfo.username}</a></p>
    <p>Followers: {userInfo.followers}</p>
    <p>Following: {userInfo.following}</p>
    <p>Public Repos: <a href={userInfo.repos_url}>{userInfo.public_repos}</a></p>
  </>;

  return (
    <div className={styles.UserDisplay}>
      {loadingDOM}
      {userInfoDOM}
    </div>
  );
};

export default UserDisplay;
