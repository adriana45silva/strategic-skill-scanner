// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import picturefill from 'picturefill';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default class Layout extends Component {
  componentDidMount() {
    picturefill();
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div>
        <h1>Welcome to React Boilerplate!</h1>
      </div>
    );
  }
}
