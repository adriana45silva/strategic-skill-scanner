function userReducer(
  state = {
    user: []
  },
  action
) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.user
      };
      break;
    case 'GET_USER':
      return {
        ...state,
        user
      };
    case 'REMOVE_USER':
      let remove = state.user.findIndex(
        userName => userName.name == action.userToRemove
      );
      remove <= 0
        ? state.user.splice(remove, 1)
        : state.user.splice(remove - 1, 1);
      let usersUpdated = state.user;
      return {
        ...state,
        user: usersUpdated
      };
      break;
    default:
      return state;
  }
}

export default userReducer;
