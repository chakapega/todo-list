import { SET_DATA_OF_EDITED_TASK } from './actionTypes';

const initialState = {
  dataOfEditedTask: null,
};

const setEditTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_OF_EDITED_TASK:
      return { ...state, dataOfEditedTask: action.payload };
    default:
      return state;
  }
};

export default setEditTaskReducer;
