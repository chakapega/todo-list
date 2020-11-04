import { TaskType, SetDataOfEditedTaskActionType, TasksType, SetTasksActionType } from '../../types';
import { SET_DATA_OF_EDITED_TASK, SET_TASKS } from './actionTypes';

export const setDataOfEditedTask = (dataOfEditedTask: TaskType): SetDataOfEditedTaskActionType => {
  return {
    type: SET_DATA_OF_EDITED_TASK,
    payload: dataOfEditedTask,
  };
};

export const setTasks = (tasks: TasksType): SetTasksActionType => {
  return {
    type: SET_TASKS,
    payload: tasks,
  };
};
