export type TaskType = {
  id: number;
  taskDescription: string;
};

export type TasksType = Array<TaskType>;

export type TaskPropsType = {
  task: TaskType;
};

export type FunctionSubscriberType = () => void;

export type FunctionsSubscribersType = Array<FunctionSubscriberType>;
