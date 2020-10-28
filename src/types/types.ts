export type taskType = {
  id: number;
  taskDescription: string;
};

export type tasksType = Array<taskType>;

export type TaskPropsType = {
  task: taskType;
  deleteTask: (taskId: number) => void;
  updateTasks: () => void;
};
