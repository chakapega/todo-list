import { SET_DATA_OF_EDITED_TASK, SET_TASKS } from './actionTypes';

const initialState = {
  dataOfEditedTask: null,
  tasks: [],
};

const setEditTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_OF_EDITED_TASK:
      return { ...state, dataOfEditedTask: action.payload };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default setEditTaskReducer;
