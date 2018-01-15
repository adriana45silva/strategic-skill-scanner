import { INITIAL_STATE as initialState } from 'javascripts/helpers/constants';

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SKILLS':
      return {
        ...state,
        skillLvl:
          { ...state.skillLvl, ...action.skills }
      };
      break;
      case 'CLEAR_SKILLS':
      return {
        initialState
      }
      break;
      case 'SKILLS_VALUE':
      return {
        ...state,
        skillValues: Object.values(action.skillsValues)
      };
      break;
      case 'UPDATE_TAB':
      return {
        ...state,
        currentTab: action.tab
      };
      break;
      case 'LABEL_CURRENT_TAB':
      return {
        ...state,
        currentTabLabel: action.currentTabLabel
      };
      break;
    
    default:
      return state;
    break;
  }
}

export default skillsReducer;


// import { INITIAL_STATE as initialState } from 'javascripts/helpers/constants';

// function skillsReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'UPDATE_SKILLS':
//       return {
//         ...state,
//         ...action.skills
//       };
//       break;
//     case 'CLEAR_SKILLS':
//       return { ...state, ...initialState }
      
//       case 'SKILLS_VALUE':
//       return {
//         ...state,
//         skillValues: Object.values(action.skills)
//       };
//       break;
//     default:
//       return state;
//   }
// }

// export default skillsReducer;
