export type TaskType = {
  id: string;
  taskDescription: string;
  date: string;
};

export type TasksType = Array<TaskType>;

export type TaskPropsType = {
  task: TaskType;
  setDataOfEditedTask: (task: TaskType) => void;
  setTasks: (tasks: TasksType) => void;
};

export type TaskListType = {
  tasks: TasksType;
  setTasks: (tasks: TasksType) => void;
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
