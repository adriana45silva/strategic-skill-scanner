// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SKILLS as skillItems } from 'javascripts/helpers/constants';
import { ROLES as tabItems  } from 'javascripts/helpers/constants';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class ChartContainer extends Component {

  componentWillMount(){
    this.chart;
  }

  static propTypes = {
    skillsValues: PropTypes.array,
    skills: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.skills.skillsValues){
      this.mountChart(nextProps)
    } else {
      this.chart ? this.chart.destroy() : null
    }

    console.log(this.checkSelectedRole().label)

  }
  

  componentDidMount(){
    
  }

  checkSelectedRole(){
    let data, label;
    return tabItems.filter((value, index) => {
      if (index == this.props.skills.currentTab){
        data = value.data;
        label = value.label;
        console.log(data, label)
        return { data, label }
      }
    });
  }

  mountChart(props){
    console.log(this.checkSelectedRole())
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
          label: 'aaa',
          pointBackgroundColor: 'rgba(230,142,128, 1)',
          borderColor: 'rgba(230,142,128, 1)',
          label: 'bbbb',
          backgroundColor: 'rgba(230,142,128, 0.5)',
          data : [ 5, 10, 5, 10, 10, 1, 1, 1, 1, 1 ]
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
    skills: store.skillsReducer
  };
};

export default connect(mapStateToProps)(ChartContainer);
