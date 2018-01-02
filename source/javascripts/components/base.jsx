// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import Tabs from 'javascripts/components/tabs';
import SkillLevel from 'javascripts/components/skill-level';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default class Layout extends Component {
  componentDidMount() {
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div className="container-fluid ss__main">
        <h1>SkillScanner</h1>

        <div className="ss__main-intro">
          <h2>Motivação</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            egestas at eros non eleifend. Maecenas ut massa tincidunt, luctus
            nisl in, lacinia mauris. Fusce lorem risus, lacinia ac sapien et,
            pharetra venenatis tellus. Aenean in elementum augue, mattis
            hendrerit nibh. Nam faucibus pulvinar tortor, placerat facilisis
            quam luctus et. Aliquam erat volutpat. Etiam laoreet gravida ligula,
            ac imperdiet felis. Pellentesque non tortor mattis, consequat lectus
            sit amet, suscipit libero. Sed varius pellentesque purus vitae
            scelerisque. Ut accumsan ut purus ut pulvinar. Suspendisse potenti.
            Quisque mollis nisi molestie ligula vehicula porta.
          </p>
        </div>

        <div className="ss__main-steps">
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
        <button className="btn btn-primary ss__main-btn" type="button">
          Começar!
        </button>

        <Tabs/>
        <SkillLevel/>
      </div>
    );
  }
}
