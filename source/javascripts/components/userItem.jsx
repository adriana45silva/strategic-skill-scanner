// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class userItem extends React.Component {
  constructor(props) {
    super(props);
    this.foo = 'foo';
    this.name = 'UserItem';
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  static propTypes = {
    user: PropTypes.string
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div>
        <h1>This is the {this.name}</h1>
        <p>This is the userItem props: {this.props.user}</p>
      </div>
    );
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default userItem;
