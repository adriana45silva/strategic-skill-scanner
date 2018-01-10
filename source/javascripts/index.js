// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from 'javascripts/stores/index.js';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/base';
import { Route } from 'react-router';

import 'stylesheets/app';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <section>
              <Route exact path="/" component={App} />
            </section>
          </ConnectedRouter>
        </Provider>
      </Router>
    </AppContainer>,
    document.getElementById('app-main')
  );
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

if (module.hot) {
  module.hot.accept('./components/base', () => {
    render(App);
  });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

render(App);
