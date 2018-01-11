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
    dispatch: PropTypes.func
  };

  componentDidMount() {
  }

  displayTabs() {
    return this.state.tabItems.map((value, index) => {
      return (
        <li className="nav-item" key={index} onClick={this.selectTab.bind(this, index)}>
          <a className={`nav-link ${this.state.currentTab == index ? 'active' : ''}`} >{value.label}</a>
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
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div className="container-fluid ss__tabs">
        <ul className="nav nav-tabs">
          {this.displayTabs()}
        </ul>
        <section>
          {this.state.currentTab == 1 ? 'alo alo': 'tchau tchau'}
        </section>
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
