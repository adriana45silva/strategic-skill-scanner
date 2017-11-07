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

if (process.env.NODE_ENV == 'development') {
  const loggerMiddleware = createLogger({
    collapsed: true
  });
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  storeReducers,
  applyMiddleware(...middlewares, thunk)
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// simple dispatch to see if reducer is ok

store.dispatch({
  type: 'ADD_USER',
  user: [
    {
      name: 'foo'
    }
  ]
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export { store, history };
