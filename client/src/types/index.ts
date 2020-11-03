export type TaskType = {
  id: number;
  taskDescription: string;
  date: string;
};

export type TasksType = Array<TaskType>;

export type TaskPropsType = {
  task: TaskType;
};
