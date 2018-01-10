// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import { SKILLS as skillItems } from 'javascripts/helpers/constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { skillActions } from 'javascripts/actions/index';
import { clearSkills } from '../actions/skills';
import PropTypes from 'prop-types';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class SkillLevel extends Component {

  componentWillMount(){
    this.setState({
      skillItems,
      skillLvl: {
        criativity: undefined,
        deskResearch: undefined,
        client: undefined,
        analysis: undefined,
        research: undefined,
        presentation: undefined,
        strategicThinking: undefined,
        relationships: undefined,
        projectManagement: undefined,
        peopleManagement: undefined
      }
    })
  }

  static propTypes = {
    dispatch: PropTypes.func
  };

  componentDidMount() {
    // this.props.dispatch(skillActions.clearSkills());
  }

  dispatchSkills(){
    this.props.dispatch(skillActions.updateSkills(this.state.skillLvl));
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
            <input type="text" placeholder="Nota para essa habilidade" data={value.skill} onChange={this.handleChange.bind(this)} value={this.state.skillItems[index].lvl} />
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

          <button className="btn btn-primary ss__main-btn" type="button" onClick={() => this.props.dispatch(clearSkills())}>
            limpa
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