import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from 'javascripts/stores/index.js';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';

import App from './components/base';

const history = createHistory({
  base: '',
  forceRefresh: false
});

const store = configureStore(history);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app-main')
  );
};
if (module.hot) {
  module.hot.accept('./components/base', () => {
    render(App);
  });
}

render(App);
