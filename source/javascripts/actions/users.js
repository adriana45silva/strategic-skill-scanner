const REMOVE_USER = 'REMOVE_USER';
const ADD_USER = 'ADD_USER';
const GET_USERS = 'GET_USERS';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function addUser(userToAdd) {
  return {
    type: ADD_USER,
    userToAdd
  };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function removeUser(userToRemove) {
  return {
    type: REMOVE_USER,
    userToRemove
  };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getUsers() {
  return {
    type: GET_USERS
  };
}

export default { addUser, removeUser, getUsers };
