import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectLoading } from '../redux/selectors/selector';

const UserDisplay = () => {
  const userInfo = useSelector(selectUser);
  const loading = useSelector(selectLoading);

  // {"login":"octocat",
  // "id":583231,
  // "node_id":"MDQ6VXNlcjU4MzIzMQ==",
  // "avatar_url":"https://avatars3.githubusercontent.com/u/583231?v=4",
  // "gravatar_id":"",
  // "url":"https://api.github.com/users/octocat",
  // "html_url":"https://github.com/octocat",
  // "followers_url":"https://api.github.com/users/octocat/followers",
  // "following_url":"https://api.github.com/users/octocat/following{/other_user}",
  // "gists_url":"https://api.github.com/users/octocat/gists{/gist_id}",
  // "starred_url":"https://api.github.com/users/octocat/starred{/owner}{/repo}",
  // "subscriptions_url":"https://api.github.com/users/octocat/subscriptions",
  // "organizations_url":"https://api.github.com/users/octocat/orgs",
  // "repos_url":"https://api.github.com/users/octocat/repos",
  // "events_url":"https://api.github.com/users/octocat/events{/privacy}",
  // "received_events_url":"https://api.github.com/users/octocat/received_events",
  // "type":"User","site_admin":false,"name":"The Octocat","company":"GitHub",
  // "blog":"http://www.github.com/blog",
  // "location":"San Francisco",
  // "email":null,"hireable":null,"bio":null,
  // "public_repos":8,
  // "public_gists":8,
  // "followers":2952,
  // "following":9,
  // "created_at":"2011-01-25T18:44:36Z","updated_at":"2020-01-31T08:56:40Z"

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
