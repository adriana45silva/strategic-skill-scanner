// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import { SKILLS as skillItems } from 'javascripts/helpers/constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { skillActions } from 'javascripts/actions/index';
import IMask from 'imask';
import PropTypes from 'prop-types';
import { INITIAL_STATE as initialState } from 'javascripts/helpers/constants';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class SkillLevel extends Component {

  componentWillMount(){
    this.setState({
      skillItems,
      skillLvl: initialState.skillLvl
    })
  }

  static propTypes = {
    dispatch: PropTypes.func
  };

  componentDidMount() {
    this.applyMask(true)
  }

  applyMask(apply){

    let inputs = document.querySelectorAll('.skills-input');
    
    let arrInstances = [];
    inputs.forEach((el, i) => {
      arrInstances.push({
        [`input${i}`]: null
      });
      arrInstances[i][`input${i}`] = new IMask(
        el,
        {
          mask: Number,
          min: 0,
          max: 10,
        });
      if (!apply){
        arrInstances[i][`input${i}`]._value = ''
        arrInstances[i][`input${i}`]._unmaskedValue = ''
        arrInstances[i][`input${i}`].destroy()
        // arrInstances[i][`input${i}`]._value
      }
      console.log(arrInstances[i][`input${i}`])
      // console.log(arrInstances[i][`input${i}`]._listeners)
    })
  }

  dispatchSkills(){
    this.props.dispatch(skillActions.updateSkills(this.state.skillLvl));
  }

  clearFields(){
    this.props.dispatch(skillActions.clearSkills());
    this.setState({ ...this.state, skillLvl: initialState.skillLvl });


    document.querySelectorAll('.skills-input').forEach(el => {
      this.applyMask(false)
      setTimeout(() => {
        el.value = '';
        // this.applyMask(true)
      }, 300);
    });
    
  }

  handleChange(event) {
    this.setState({ skillLvl: { ...this.state.skillLvl, [event.target.attributes.data.value] : event.target.value } });
  }

  displaySkills() {
    return this.state.skillItems.map((value, index) => {
      return (
        <li className="nav-item" key={index}>
          <div className="ss__skills__lvl">
            <p>{value.label}</p>
            <input type="text" className="skills-input" placeholder="Nota para essa habilidade" data={value.skill} onChange={this.handleChange.bind(this)} value={this.state.skillLvl.skillLvl} />
          </div>
        </li>
      )
    })
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div className="container-fluid ss__skills">
        <ul >
          {this.displaySkills()}
        </ul>
        <div>
          <button className="btn btn-primary ss__main-btn" type="button" onClick={this.dispatchSkills.bind(this)}>
            Calcular!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    skills: store.skillsReducer.skillLvl
  };
};

const mapDispatchToProps = dispatch => {
  const boundActionCreators = bindActionCreators(skillActions, dispatch);
  const allActionProps = { ...boundActionCreators, dispatch };
  return allActionProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillLevel);