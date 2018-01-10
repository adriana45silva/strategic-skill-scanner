const UPDATE_SKILLS = 'UPDATE_SKILLS';
const CLEAR_SKILLS = 'CLEAR_SKILLS';
const SKILLS_VALUE = 'SKILLS_VALUE';


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
