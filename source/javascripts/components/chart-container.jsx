// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class ChartContainer extends Component {

  componentWillMount(){
    this.chart;
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.)

    if (nextProps.skillsValues){
      this.mountChart(nextProps)
    } else {
      this.chart ? this.chart.destroy() : null
    }

    
  }

  static propTypes = {
    skillsValues: PropTypes.array
  };
  

  mountChart(props){
    let ctx = document.getElementById('chart').getContext('2d');

    let data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        data: props.skillsValues || this.props.skillsValues,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    this.chart = new Chart(ctx, {
      type: 'polarArea',
      data
    });
  }


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div className="container-fluid ss__tabs">
        <canvas id="chart" width="500" height="500">
        </canvas>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    skillsValues: store.skillsReducer.skillValues
  };
};

export default connect(mapStateToProps)(ChartContainer);
