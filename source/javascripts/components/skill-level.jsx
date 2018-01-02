// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default class SkillLevel extends Component {

  componentWillMount(){
    this.setState({
      skillItems: [ 'Criatividade', 'Desk Research', 'Cliente', 'Análise', 'Pesquisa', 'Apresentação', 'Pensamento Estratégico', 'Relacionamento', 'Gerenc. de Projetos', 'Gerenc. de Pessoas' ],
      skillLvl: {
        criativity: 0,
        deskResearch: 0,
        client: 0,
        analysis: 0,
        research: 0,
        presentation: 0,
        strategicThinking: 0,
        relationships: 0,
        projectManagement: 0,
        peopleManagement: 0
      }
    })
  }

  componentDidMount() {
  }

  displaySkills() {
    return this.state.skillItems.map((value, index) => {
      return (
        <li className="nav-item" key={index} >
          <div className="ss__skills__lvl">
            <p>{value}</p>
            <input type="text" placeholder="Nota para essa habilidade"/>
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
          <button className="btn btn-primary ss__main-btn" type="button">
            Calcular!
          </button>
        </div>
      </div>
    );
  }
}
