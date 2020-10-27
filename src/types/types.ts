type deleteTask = (taskId: number) => void;

export type task = {
  id: number;
  taskDescription: string;
};

export type tasks = Array<task>;

export type AddNewTaskProps = {
  tasks: tasks;
  updateTasks: () => void;
  saveTasks: (tasks: tasks) => void;
};

export type TaskListProps = {
  tasks: tasks;
  deleteTask: deleteTask;
};

export type TaskProps = {
  task: task;
  deleteTask: deleteTask;
};
