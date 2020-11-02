export {};

const tasks = [
  {
    id: 1,
    taskDescription: 'task description 1',
  },
  {
    id: 2,
    taskDescription: 'task description 2',
  },
  {
    id: 3,
    taskDescription: 'task description 3',
  },
];

const get = () => tasks;

module.exports = { get };
