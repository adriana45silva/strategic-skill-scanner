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
    this.userChart;
    this.roleChart;

    this.setState({
      roleSelected: ''
    })
  }

  static propTypes = {
    skillsValues: PropTypes.array,
    skills: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.skills.skillValues){
      this.mountChart(nextProps)
    } else {
      this.chart ? this.chart.destroy() : null
    }
  }
  

  componentDidMount(){
    
  }

  mountChart(props){
    let arr = []

    skillItems.forEach(element => {
      arr.push(element.label);
    });

    let options = {
      percentageInnerCutout: 70
    };

    

    let ctxUser = document.getElementById('userChart').getContext('2d');
    let ctxRole = document.getElementById('roleChart').getContext('2d');
    let currentTab = props.skills.currentTabLabel;

    let foo = props.skills.skillValues


    let userData = {
      labels: arr,
      datasets: [
        {
          backgroundColor: [
            'rgba(219, 62, 51, 0.5)',
            'rgba(209, 32, 89, 0.5)',
            'rgba(140, 34, 158, 0.5)',
            'rgba(58, 73, 163, 0.5)',
            'rgba(30, 169, 190, 0.5)',
            'rgba(20, 134, 122, 0.5)',
            'rgba(125, 175, 68, 0.5)',
            'rgba(184, 197, 53, 0.5)',
            'rgba(228, 173, 43, 0.5)',
            'rgba(106, 72, 62, 0.5)'
          ],
          data: foo
        }
      ]
    }

    let roleData = {
      labels: arr,
      datasets: [
        {
          backgroundColor: [
            'rgba(219, 62, 51, 0.5)',
            'rgba(209, 32, 89, 0.5)',
            'rgba(140, 34, 158, 0.5)',
            'rgba(58, 73, 163, 0.5)',
            'rgba(30, 169, 190, 0.5)',
            'rgba(20, 134, 122, 0.5)',
            'rgba(125, 175, 68, 0.5)',
            'rgba(184, 197, 53, 0.5)',
            'rgba(228, 173, 43, 0.5)',
            'rgba(106, 72, 62, 0.5)'
          ],
          data: currentTab.data
        }
      ]
    }

    if (props.skills.skillValues && props.skills.skillValues.length > 0 && props.skills.skillValues.indexOf(undefined) == -1 && currentTab.data){
      this.userChart = new Chart(ctxUser,
        {
          type: 'polarArea',
          data: userData,
          options
        });

        this.roleChart = new Chart(ctxRole,
          {
            type: 'pie',
            data: roleData,
            options
          });
      }
    }


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div className={`${this.props.skills.skillValues.length && this.props.skills.currentTabLabel && this.props.skills.skillValues.indexOf(undefined) == -1 ? 'container-fluid ss__tabs ss__chart' : 'container-fluid ss__tabs ss__chart d-none'} `}>
        <div className="ss__chart__container">
          <div className="ss__chart__item user">
            <h2>Você</h2>
            <canvas id="userChart" width="500" height="500">
            </canvas>
          </div>
          <div className="ss__chart__item role">
            <h2> { this.props.skills.currentTabLabel ? this.props.skills.currentTabLabel.label : null } </h2>
            <canvas id="roleChart" width="500" height="500">
            </canvas>
          </div>
        </div>
        <button className="btn btn-primary ss__main-btn btn-print" type="button" onClick={() => window.print()} >
          Imprimir gráfico
        </button>
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
