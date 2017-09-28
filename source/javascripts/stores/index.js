import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux';
import testReducer from 'javascripts/reducers/index';

const loggerMiddleware = createLogger({
  collapsed: true
});

const reducers = combineReducers({
  routing: routerReducer,
  foo: testReducer
});

let middlewares = [];

export default function configureStore(history, state) {
  if (process.env.NODE_ENV != 'production') {
    console.log('aaaaa');
    middlewares.push(loggerMiddleware);
    return createStore(
      reducers,
      applyMiddleware(thunk, loggerMiddleware, routerMiddleware(history))
    );
  } else {
    return createStore(reducers, applyMiddleware(thunk));
  }
}
