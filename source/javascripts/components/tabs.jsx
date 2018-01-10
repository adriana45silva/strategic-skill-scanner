// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import { ROLES as tabItems  } from 'javascripts/helpers/constants';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default class Tabs extends Component {

  componentWillMount(){
    this.setState({
      currentTab: null,
      tabItems
    })
  }

  componentDidMount() {
  }

  displayTabs() {
    return this.state.tabItems.map((value, index) => {
      return (
        <li className="nav-item" key={index} onClick={this.selectTab.bind(this, index)}>
          <a className={`nav-link ${this.state.currentTab == index ? 'active' : ''}`} href="#">{value}</a>
        </li>
      )
    })
  }

  selectTab(tabId){
    this.setState({
      ...this.state,
      currentTab: tabId
    })
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
