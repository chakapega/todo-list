export {};

const tasks = [
  {
    id: 1,
    taskDescription: 'task description 1',
    date: '03/11/2020 10:43:09',
  },
  {
    id: 2,
    taskDescription: 'task description 2',
    date: '03/11/2020 09:37:50',
  },
  {
    id: 3,
    taskDescription: 'task description 3',
    date: '02/11/2020 15:30:33',
  },
];

const get = () => tasks;

const add = (task): void => {
  tasks.push(task);
};

module.exports = { get, add };
