import React, { useState } from 'react';
import { fetchUser } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

const UserPage = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
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
        {userInfo}
      </main>
    </>
  );
};

export default UserPage;
