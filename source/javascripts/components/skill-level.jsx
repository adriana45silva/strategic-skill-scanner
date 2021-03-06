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

  constructor(){
    super();
    this.arr = [];
    this.inputs;
  }

  static propTypes = {
    dispatch: PropTypes.func
  };

  componentDidMount() {
    this.applyMask(true)
  }

  applyMask(){

    this.inputs = document.querySelectorAll('.skills-input');
    
    this.inputs.forEach((el, i) => {
      this.arr.push({
        [`input${i}`]: new IMask(el, {
          mask: Number,
          min: 0,
          max: 10
        })
      });
    })
  }

  dispatchSkills(){
    if (Object.values(this.state.skillLvl).indexOf(undefined) == -1){
      this.props.dispatch(skillActions.updateSkills(this.state.skillLvl));
    }
    this.props.dispatch(skillActions.renderAlert());
  }

  clearFields(){
    this.props.dispatch(skillActions.clearSkills());
    this.setState({ ...this.state, skillLvl: initialState.skillLvl });

    this.arr.forEach((el, i) => {
      el[`input${i}`].el.value = '';
      el[`input${i}`].masked._value = '';
      el[`input${i}`].masked._unmaskedValue = '';
      el[`input${i}`].masked.reset();
    })
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
          <button className="btn btn-primary ss__main-btn" type="button" onClick={this.clearFields.bind(this)}>
            Limpar
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