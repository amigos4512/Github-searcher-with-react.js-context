import { Link } from 'react-router-dom';
import { UserReposCount } from './UserReposCount';

export const UserItem = ({ login, avatar_url, repos_url }) => (
  <Link to={`/repository/${login}`}>
    <div className='user_item'>
      <img className='user_item_img' src={avatar_url} alt={login} />
      <h4>User: &nbsp;{login}</h4>
      <UserReposCount repos_url={repos_url} />
    </div>
  </Link>
);
