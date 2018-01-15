// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
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

let store;

if (process.env.NODE_ENV == 'development'){
  store = createStore(
    storeReducers,
    applyMiddleware(...middlewares, thunkMiddleware, loggerMiddleware)
  );
} else {
  store = createStore(
    storeReducers,
    applyMiddleware(...middlewares, thunkMiddleware)
  );
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export { store, history };
