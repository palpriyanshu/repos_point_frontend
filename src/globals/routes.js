const dotenv = require('dotenv');
dotenv.config();

export default {
  COMPARISONS: '/comparisons',
  COMPARISON: '/comparison/:id',
  NEW_REPO: '/repo',
  HOME: '/',
  LOGOUT: '/logout',
  LOGIN: `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,
};
