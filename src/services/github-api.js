import axios from 'axios';

export const authParams = {
  // Temporary credentials without any rights
  auth: {
    username: 'amigos4512',
    password: atob('Z2hwX081ejREUzBYYVY3Z2g2WXdENnFQR1NOTkdaelptMzBFV1FkZQ=='),
  },
};

export const fetchUsersRequest = query => {
  return axios.get(
    `https://api.github.com/search/users?q=${query}&_limit=10`,
    authParams
  );
};

export const fetchUserRequest = username => {
  return axios.get(` https://api.github.com/users/${username}`, authParams);
};
