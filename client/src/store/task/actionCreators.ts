import { TaskType, SetDataOfEditedTaskActionType } from '../../types';
import { SET_DATA_OF_EDITED_TASK } from './actionTypes';

export const setDataOfEditedTask = (dataOfEditedTask: TaskType): SetDataOfEditedTaskActionType => {
  return {
    type: SET_DATA_OF_EDITED_TASK,
    payload: dataOfEditedTask,
  };
};
