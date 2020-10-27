type deleteTaskType = (taskId: number) => void;

export type taskType = {
  id: number;
  taskDescription: string;
};

export type tasksType = Array<taskType>;

export type AddNewTaskPropsType = {
  tasks: tasksType;
  updateTasks: () => void;
  saveTasks: (tasks: tasksType) => void;
};

export type TaskListPropsType = {
  tasks: tasksType;
  deleteTask: deleteTaskType;
};

export type TaskPropsType = {
  task: taskType;
  deleteTask: deleteTaskType;
};
