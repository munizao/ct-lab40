import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectRepos, selectLoading, selectError } from '../../redux/selectors/repos-selector';
import { selectUser } from '../../redux/selectors/user-selector';
import { fetchRepos } from '../../redux/actions/actions';
import Repo from './Repo';
import styles from './ReposDisplay.css';

const ReposDisplay = () => {
  const loading = useSelector(selectLoading);
  const reposError = useSelector(selectError);
  const reposInfo = useSelector(selectRepos);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user) {
      dispatch(fetchRepos(user.login));
    }
  }, [user && user.login]);

  return (
    <div className={styles.ReposDisplay}>
      {loading && <p>Loading...</p>}
      {reposError && <p>{reposError.message}</p>}
      {
        reposInfo &&
          <div>
            {reposInfo.map((repo) => <Repo key={repo.id} repo={repo} />)}
          </div>
      }
    </div>
  );
};

export default ReposDisplay;
