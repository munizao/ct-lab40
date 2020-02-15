import React, { useState } from 'react';
import { fetchUser } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import UserDisplay from './UserDisplay/UserDisplay';
import ReposDisplay from './ReposDisplay/ReposDisplay';
import styles from './UserPage.css';


const UserPage = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main className={styles.Main} >
        <section className={styles.Controls}>
          <input type="text" value={userName}  onChange={({ target }) => setUserName(target.value)} />
          <button onClick={() => dispatch(fetchUser(userName))}>Submit</button>
        </section>
        <section className={styles.Results}>
          <UserDisplay />
          <ReposDisplay />
        </section>
      </main>
    </>
  );
};

export default UserPage;
