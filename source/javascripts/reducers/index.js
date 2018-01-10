// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import skillsReducer from 'javascripts/reducers/skills';

// -----------------------------------------------------
// Combine reducers for the application
// -----------------------------------------------------

const reducers = combineReducers({
  skillsReducer,
  routing: routerReducer
});

export default reducers;
