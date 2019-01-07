 
export const ROLES = [
   {
     role: 'intern',
     label: 'Estagiário(a)',
     data: [ 5, 10, 5, 10, 10, 1, 1, 1, 1, 1 ]
   },
   {
     role: 'assistent',
     label: 'Assistente',
     data: [ 5, 10, 5, 10, 10, 5, 5, 5, 5, 1 ]
   },
   {
    role: 'supervisor',
    label: 'Supervisor(a)',
    data: [ 10, 5, 5, 5, 10, 5, 10, 5, 5, 5 ]
  },
  {
    role: 'manager',
    label: 'Gerente',
    data: [ 10, 1, 5, 1, 5, 10, 10, 5, 5, 5 ]
  },
  {
    role: 'director',
    label: 'Diretor(a)',
    data: [ 5, 1, 10, 1, 1, 5, 5, 10, 10, 10 ]
  }
  ];

export const SKILLS = [
  {
    skill: 'criativity',
    label: 'Criatividade'
  },
  {
    skill: 'deskResearch',
    label: 'Desk Research'
  },
  {
    skill: 'client',
    label: 'Cliente'
  },
  {
    skill: 'analysis',
    label: 'Análise'
  },
  {
    skill: 'research',
    label: 'Pesquisa Quali/Quanti'
  },
  {
    skill: 'presentation',
    label: 'Storytelling'
  },
  {
    skill: 'strategicThinking',
    label: 'Conceitos Estratégicos'
  },
  {
    skill: 'relationships',
    label: 'Integração'
  },
  {
    skill: 'projectManagement',
    label: 'Gest. de Projetos'
  },
  {
    skill: 'peopleManagement',
    label: 'Gest. de Pessoas'
  },
];

export const INITIAL_STATE = {
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
  },
  skillValues: [],
  currentTab: null,
  currentTabLabel: null
}



