// eslint-disable-next-line
const BASE_URL = `https://mate-api.herokuapp.com`;

export function getAllToodos() {
  return fetch(`${BASE_URL}/todos`)
    .then(response => response.json()).then(result => result.data);
}

export function selectedUser(userId) {
  return fetch(`${BASE_URL}/users/${userId}`)
    .then(response => response.json()).then(result => result.data);
}
