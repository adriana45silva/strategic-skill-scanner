const UPDATE_SKILLS = 'UPDATE_SKILLS';
const CLEAR_SKILLS = 'CLEAR_SKILLS';
const SKILLS_VALUE = 'SKILLS_VALUE';
import { ROLES as tabItems  } from 'javascripts/helpers/constants';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function updateSkills(skills) {
  return (dispatch, getState) => {
    
    dispatch(skillsValue(skills))
    dispatch({
      type: UPDATE_SKILLS,
      skills
    });
  }

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function clearSkills() {
  return {
    type: CLEAR_SKILLS
  };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function skillsValue(skillsValues) {
  return {
    type: SKILLS_VALUE,
    skillsValues
  };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function updateTabs(tab){
  return {
    type: 'UPDATE_TAB',
    tab
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function checkSelectedRole(){
  return (dispatch, getState) =>  {
    return tabItems.filter((value, index, arr) => {
      // console.log(getState().)
      if (index == getState().skillsReducer.currentTab){
        dispatch({
          type: 'LABEL_CURRENT_TAB',
          currentTabLabel: value
        })
      }
    });
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


export function renderAlert(){
  return (dispatch, getState) => {
    if (getState().skillsReducer.currentTab == null && !getState().skillsReducer.skillValues.length){
      alert('Você precisa selecionar um nível hierárquico e preencher os campos.');
    } else if (getState().skillsReducer.currentTab == null && (getState().skillsReducer.skillValues.length && getState().skillsReducer.skillValues.indexOf(undefined) == -1)){
      alert('Você precisa selecionar um nível hierárquico.');
    } else if (getState().skillsReducer.currentTab != null && (!getState().skillsReducer.skillValues.length || getState().skillsReducer.skillValues.indexOf(undefined) != -1)  ) {
      alert('Você precisa preencher todos os campos.');
    } else {
      return
    }

    dispatch({
      type: 'RENDER_ALERT',
    })
  }
}
