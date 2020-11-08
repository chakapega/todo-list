import { TaskStateType, TaskActionTypes } from '../../types';
import { SET_DATA_OF_EDITED_TASK, SET_TASKS } from './actionTypes';

const taskState: TaskStateType = {
  dataOfEditedTask: null,
  tasks: [],
};

const taskReducer = (state = taskState, action: TaskActionTypes): TaskStateType => {
  switch (action.type) {
    case SET_DATA_OF_EDITED_TASK:
      return { ...state, dataOfEditedTask: action.payload };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
