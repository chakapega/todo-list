export type TaskType = {
  id: string;
  taskDescription: string;
  date: string;
};

export type TasksType = Array<TaskType>;

export type TaskPropsType = {
  task: TaskType;
  setDataOfEditedTask: (task: TaskType) => void;
};

export type FunctionSubscriberType = () => void;

export type FunctionsSubscribersType = Array<FunctionSubscriberType>;

export type SetDataOfEditedTaskActionType = {
  type: string;
  payload: TaskType | null;
};
