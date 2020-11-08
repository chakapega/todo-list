export type TaskType = {
  id: string;
  taskDescription: string;
  date: string;
};

export type TasksType = Array<TaskType>;

export type TaskPropsType = {
  task?: TaskType;
};

export type SetDataOfEditedTaskActionType = {
  type: string;
  payload: TaskType | null;
};

export type WrapperOfAddAndEditTaskType = {
  dataOfEditedTask: TaskType;
};

export type SetTasksActionType = {
  type: string;
  payload: TasksType;
};

export type StoreStateType = {
  task: {
    dataOfEditedTask: TaskType;
    tasks: TasksType;
  };
};
