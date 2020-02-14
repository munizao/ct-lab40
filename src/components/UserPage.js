import React, { useState } from 'react';
import { fetchUser } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectLoading } from '../redux/selectors/selector';

const UserPage = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const loading = useSelector(selectLoading);
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
        <div>
          {loading ? 'Loading...' : JSON.stringify(userInfo)}
        </div>
      </main>
    </>
  );
};

export default UserPage;
