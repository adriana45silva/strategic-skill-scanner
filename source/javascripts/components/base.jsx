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
          <h1>#SkillScanner</h1>

          <div className="ss__main-intro">
            <h2>Carreira em Estratégia - Autoconhecimento</h2>

            <p>
              Seja bem-vindo(a) à SkillScanner! Essa ferramenta foi criada por nós, <a href="https://www.linkedin.com/in/nathalia-andrijic-3083088a/" target="_blank" rel="noopener noreferrer">Nathalia Andrijic</a>, Estrategista e Designer de Serviços Sênior na HandMade, e <a href="https://www.linkedin.com/in/felipegavronski/" target="_blank" rel="noopener noreferrer">Felipe Gavronski</a>, Diretor de Estratégia na Tribal Worldwide, pra te ajudar a pensar no seu momento de carreira, suas fortalezas e fraquezas, assim você saberá no que precisa evoluir. Acreditamos muito que o Autoconhecimento vai nos tornar melhores Estrategistas. O processo é simples, porém profundo:
            </p>
          </div>

          <div className="ss__main-steps">
            <ol>
              <li>Escolha seu nível hierárquico</li>
              <li>Reflita sobre cada um dos Skills</li>
              <li>Dê notas de 1 a 5 para como você está em cada um deles</li>
              <li>Clique em Calcular! e compare com o modelo ideal</li>
              <li>Olhe sua SkillScanner e reflita sobre o que você precisa desenvolver</li>
              <li>Salve / Imprima sua pizza e a use como guia</li>
              <li>Refaça daqui uns meses pra comparar sua evolução</li>
            </ol>
          </div>

          <Tabs/>
          <SkillLevel/>
        </div>
        <ChartContainer/>

        <footer className="ss__footer">
          <h5>Feito com<span>️️️️️❤️</span> por <a href="https://www.linkedin.com/in/adriana45silva/">Adriana Silva</a> -  {new Date().getFullYear()}</h5>
        </footer>
      </div>
    );
  }
}
