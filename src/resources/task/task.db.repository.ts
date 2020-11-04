export {};

let tasks = [
  {
    id: '1',
    taskDescription: 'task description 1',
    date: '03/11/2020 10:43:09',
  },
  {
    id: '2',
    taskDescription: 'task description 2',
    date: '03/11/2020 09:37:50',
  },
  {
    id: '3',
    taskDescription: 'task description 3',
    date: '02/11/2020 15:30:33',
  },
];

const get = () => tasks;

const add = (task): void => {
  tasks.push(task);
};

const deleteTask = (id: string): void => {
  tasks = tasks.filter((task) => id !== task.id);
};

const edit = (editedTask): void => {
  tasks.forEach((task) => {
    if (task.id === editedTask.id) {
      task.taskDescription = editedTask.taskDescription;
      task.date = editedTask.date;
    }
  });
};

module.exports = { get, add, deleteTask, edit };
