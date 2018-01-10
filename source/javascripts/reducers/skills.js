import { INITIAL_STATE as initialState } from 'javascripts/helpers/constants';

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
      case 'SKILLS_VALUE':
      return {
        ...initialState,
        skillValues: Object.values(action.skillsValues)
      };
      break;
    default:
      return state;
  }
}

export default skillsReducer;
