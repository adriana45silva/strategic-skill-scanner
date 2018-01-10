// import { SKILLS as initialState } from 'javascripts/helpers/constants';

const initialState = {
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
}

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SKILLS':
      return {
        ...state,
        skillLvl: action.skills
      };
      break;
    case 'CLEAR_SKILLS':
      return {
        ...initialState
      };
      break;
    default:
      return state;
  }
}

export default skillsReducer;
