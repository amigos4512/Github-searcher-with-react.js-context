import axios from 'axios';
import { useEffect, useState } from 'react';
import { authParams } from '../../services/github-api';

export const UserReposCount = ({ repos_url }) => {
  const [reposCount, setReposCount] = useState(0);

  useEffect(() => {
    axios
      .get(repos_url, authParams)
      .then(reponse => setReposCount(reponse.data.length));
  }, [repos_url]);

  return <div>Repos count:&nbsp;{reposCount}</div>;
};
