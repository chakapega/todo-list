import { SET_DATA_OF_EDITED_TASK, SET_TASKS } from '../store/task/actionTypes';

export type TaskType = {
  id: string;
  taskDescription: string;
  date: string;
};

export type DataOfEditedTaskType = TaskType | null;

export type TasksType = Array<TaskType>;

export type TaskPropsType = {
  task?: TaskType;
};

export type WrapperOfAddAndEditTaskType = {
  dataOfEditedTask: TaskType;
};

export type StoreStateType = {
  task: {
    dataOfEditedTask: DataOfEditedTaskType;
    tasks: TasksType;
  };
};

export type SetDataOfEditedTaskActionType = {
  type: typeof SET_DATA_OF_EDITED_TASK;
  payload: TaskType | null;
};

export type SetTasksActionType = {
  type: typeof SET_TASKS;
  payload: TasksType;
};

export type TaskActionTypes = SetDataOfEditedTaskActionType | SetTasksActionType;

export type TaskStateType = {
  dataOfEditedTask: DataOfEditedTaskType;
  tasks: TasksType;
};
