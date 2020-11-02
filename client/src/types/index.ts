export type TaskType = {
  id: number;
  taskDescription: string;
};

export type TasksType = Array<TaskType>;

export type TaskPropsType = {
  task: TaskType;
};
