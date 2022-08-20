import { UserItem } from './UserItem';
import './SearchUserStyle.scss';

import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export const SearchUserPage = () => {
  const { users, handleInputchange, value } = useContext(DataContext);
  return (
    <>
      <div className='container'>
        <h3>Search users</h3>
        <div className='container_input'>
          <input
            type='text'
            value={value}
            onChange={handleInputchange}
            placeholder='Search for Github username...'
          />
        </div>
        {!value.length || !users.length ? (
          value && users ? (
            <h3>User with this name is not found</h3>
          ) : (
            <h3>Please insert name</h3>
          )
        ) : (
          users.map(user => (
            <UserItem
              key={user.id}
              login={user.login}
              avatar_url={user.avatar_url}
              repos_url={user.repos_url}
            />
          ))
        )}
      </div>
    </>
  );
};
