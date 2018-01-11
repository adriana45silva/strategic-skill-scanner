// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SKILLS as skillItems } from 'javascripts/helpers/constants';
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
    let arr = []

    skillItems.forEach(element => {
      arr.push(element.label);
    });

      let options = {
        percentageInnerCutout: 70
      };

    let ctx = document.getElementById('chart').getContext('2d');

    let radarData = {
      labels : arr,
      datasets : [
        {
          label: 'Você',
          pointBackgroundColor: 'rgba(33,150,243, 1)',
          backgroundColor: 'rgba(33,150,243, 0.5)',
          fill: true,
          data : props.skillsValues || this.props.skillsValues,
          borderWidth: 2,
          borderColor: 'rgba(33,150,243, 1)',
          pointHoverBackgroundColor: 'rgba(33,150,243, 1)'
        },
        {
          pointBackgroundColor: 'rgba(230,142,128, 1)',
          borderColor: 'rgba(230,142,128, 1)',
          label: 'bbbb',
          backgroundColor: 'rgba(230,142,128, 0.5)',
          data : [ 2, 4, 4, 9, 6, 7, 10 ]
        }
      ]
    }

    this.chart = new Chart(ctx, {
      type: 'radar',
      data: radarData,
      options
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
