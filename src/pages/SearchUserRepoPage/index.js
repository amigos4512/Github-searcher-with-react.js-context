import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchRepos } from './SearchRepos';
import { fetchUserRequest } from '../../services/github-api';
import './RepoStyles.scss';

export const SearchUserRepoPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (username) {
      fetchUserRequest(username).then(response => setUser(response.data));
    }
  }, [username]);

  return (
    <div className='container'>
      <h3>Search repos</h3>
      <div className='container_avatar'>
        <img src={user?.avatar_url} alt={user.login} />

        <ul className='container_list'>
          <li>Username:&nbsp;{user.login}</li>
          <li> Email:&nbsp;{user.email || 'user did not enter his email'}</li>
          <li>Location:&nbsp;{user.location}</li>
          <li>Join at:&nbsp;{String(user.created_at)}</li>
          <li>Followers:&nbsp;{user.followers}</li>
          <li>Following:&nbsp;{user.following}</li>
        </ul>
      </div>
      <p>{user.bio}</p>
      {user.repos_url && <SearchRepos repos_url={user.repos_url} />}
    </div>
  );
};
