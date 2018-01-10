// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import storeReducers from 'javascripts/reducers/index';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const history = createHistory();
const RouterMiddleware = routerMiddleware(history);

let middlewares = [ RouterMiddleware ];

let  loggerMiddleware = createLogger({
  collapsed: true
});


const store = createStore(
  storeReducers,
  applyMiddleware(...middlewares, thunk, process.env.NODE_ENV == 'development' ? loggerMiddleware : null)
);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export { store, history };
