// -----------------------------------------------------
// Imports
// -----------------------------------------------------

import React, { Component } from 'react';
import Tabs from 'javascripts/components/tabs';
import SkillLevel from 'javascripts/components/skill-level';
import ChartContainer from 'javascripts/components/chart-container';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default class Layout extends Component {
  componentDidMount() {
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (
      <div className="container-fluid ss__main">
        <div className="ss__main__container">
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
              <li>Escolha o nível hierárquico a ser comparado</li>
              <li>Preencha os campos conforme sua qualificação nas habilidades, com notas de 0 a 10</li>
              <li>Caso quiser, imprima os gráficos :) </li>
            </ol>
          </div>

          <Tabs/>
          <SkillLevel/>
        </div>
        <ChartContainer/>
      </div>
    );
  }
}
