const initialState = {
  opened: false
};

const offCanvas = (state = initialState, action) => {
  switch (action.type) {
    case 'OFFCANVAS_OPEN':
      return {
        ...state,
        opened: true
      };
      break;

    case 'OFFCANVAS_CLOSE':
      return {
        ...state,
        opened: false
      };
      break;

    default:
      return initialState;
  }
};

export default offCanvas;
