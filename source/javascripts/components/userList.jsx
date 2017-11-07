// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React from 'react';
import UserItem from 'javascripts/components/userItem.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Todo List';
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  static propTypes = {
    user: PropTypes.array
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  componentWillMount() {}

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  componentDidUpdate() {}

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div>
        <h1>This is the UserList</h1>
        <UserItem user={this.props.user[0].name} />
      </div>
    );
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const mapStateToProps = store => {
  return {
    user: store.userReducer.user
  };
};

export default connect(mapStateToProps)(UserList);
