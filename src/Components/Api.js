const GET = 'GET';
const POST = 'POST';

const fetchGetRequest = (url, headers) => {
  const defaultHeaders = {
    accept: 'application/json',
  };
  return fetch(url, {
    method: GET,
    headers: headers || defaultHeaders,
  });
};

const fetchPostRequest = (url, data, headers) => {
  const defaultHeaders = {
    accept: 'application/json',
    'Content-type': 'application/json',
  };

  return fetch(url, {
    method: POST,
    body: JSON.stringify(data),
    headers: headers || defaultHeaders,
  });
};

export const loginUser = (username) => {
  return new Promise((resolve, reject) => {
    fetchPostRequest('/api/login', { username })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch(reject);
  });
};

export const registerUser = (username, userDetails) => {
  return new Promise((resolve, reject) => {
    fetchPostRequest(`/api/registerUser`, { username, userDetails })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    fetchPostRequest(`/api/user/logout`)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    fetchGetRequest('/api/currentUser')
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getRepos = (value) => {
  return new Promise((resolve, reject) => {
    fetchGetRequest(`/api/repos/${value}`)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const saveComparisons = (comparison) => {
  return new Promise((resolve, reject) => {
    fetchPostRequest('/api/user/saveComparisons', { comparison })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getOrderList = () => {
  return new Promise((resolve, reject) => {
    fetchGetRequest('/api/user/getOrderList')
      .then((res) => {
        if (res.redirected) {
          window.location.href = res.url;
          return { message: 'Please Login' };
        }
        return res.json();
      })
      .then(resolve);
  });
};

export const getComparison = (id) => {
  return new Promise((resolve, reject) => {
    fetchGetRequest(`/api/user/getComparison/${id}`)
      .then((res) => {
        if (res.redirected) {
          window.location.href = res.url;
          return { message: 'Please Login' };
        }
        return res.json();
      })
      .then(resolve);
  });
};

export const deleteComparison = (id) => {
  return new Promise((resolve, reject) => {
    fetchPostRequest(`/api/user/deleteComparison`, { id })
      .then((res) => res.json())
      .then(resolve);
  });
};
