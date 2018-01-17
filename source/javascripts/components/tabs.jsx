// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import { ROLES as tabItems  } from 'javascripts/helpers/constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { skillActions } from 'javascripts/actions/index';
import PropTypes from 'prop-types';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class Tabs extends Component {

  componentWillMount(){
    this.setState({
      currentTab: null,
      tabItems
    })
  }

  static propTypes = {
    dispatch: PropTypes.func,
    skillsReducer: PropTypes.object
  };

  componentDidMount() {
  }

  displayTabs() {
    return this.state.tabItems.map((value, index) => {
      return (
        <li className={`${this.props.skillsReducer.currentTab == index ? 'nav-item active' : 'nav-item'}`} key={index} onClick={this.selectTab.bind(this, index)}>
          <a className={`nav-link`} >{value.label}</a>
        </li>
      )
    })
  }

  selectTab(tabId){
    this.setState({
      ...this.state,
      currentTab: tabId
    })

    this.props.dispatch(skillActions.updateTabs(tabId));
    this.props.dispatch(skillActions.checkSelectedRole());
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div className="container-fluid ss__tabs">
        <ul className="nav nav-pills">
          {this.displayTabs()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    skillsReducer: store.skillsReducer
  };
};

const mapDispatchToProps = dispatch => {
  const boundActionCreators = bindActionCreators(skillActions, dispatch);
  const allActionProps = { ...boundActionCreators, dispatch };
  return allActionProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
