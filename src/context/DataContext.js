import React, { createContext, useState, useEffect } from 'react';
import { fetchUsersRequest } from '../services/github-api';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);

  const handleInputchange = e => setValue(e.target.value);

  useEffect(() => {
    value.length &&
      setTimeout(
        () =>
          fetchUsersRequest(value).then(response =>
            setUsers(response.data.items)
          ),
        450
      );
  }, [value]);

  return (
    <DataContext.Provider
      value={{
        handleInputchange,
        users,
        value,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
