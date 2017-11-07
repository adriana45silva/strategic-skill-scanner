// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from 'javascripts/reducers/user';

// -----------------------------------------------------
// Combine reducers for the application
// -----------------------------------------------------

const reducers = combineReducers({
  userReducer,
  routing: routerReducer
});

export default reducers;
