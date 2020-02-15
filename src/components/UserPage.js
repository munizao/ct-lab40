import React, { useState } from 'react';
import { fetchUser } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import UserDisplay from './UserDisplay';

const UserPage = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <div>
          <input type="text" value={userName}  onChange={({ target }) => setUserName(target.value)} />
          <button onClick={() => dispatch(fetchUser(userName))}>Submit</button>
        </div>
        <UserDisplay />
      </main>
    </>
  );
};

export default UserPage;
