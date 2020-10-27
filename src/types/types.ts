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

export type TaskListProps = { tasks: tasks };

export type TaskProps = { taskDescription: string };
