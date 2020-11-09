import { TasksType, TaskType } from '../../types';

let tasks: TasksType = [
  {
    id: '3',
    taskDescription: 'task description 3',
    date: '03/11/2020 10:43:09',
  },
  {
    id: '2',
    taskDescription: 'task description 2',
    date: '03/11/2020 09:37:50',
  },
  {
    id: '1',
    taskDescription: 'task description 1',
    date: '02/11/2020 15:30:33',
  },
];

const get = async (): Promise<TasksType> => tasks;

const add = async (task: TaskType): Promise<void> => {
  tasks.unshift(task);
};

const deleteTask = async (id: string): Promise<void> => {
  tasks = tasks.filter((task) => id !== task.id);
};

const edit = async (editedTask: TaskType): Promise<void> => {
  tasks = tasks.filter((task) => editedTask.id !== task.id);
  tasks.unshift(editedTask);
};

export default { get, add, deleteTask, edit };
