export {};

const taskDbRepository = require('./task.db.repository');

const get = () => taskDbRepository.get();

const add = (task) => taskDbRepository.add(task);

const deleteTask = (id) => taskDbRepository.deleteTask(id);

const edit = (editedTask) => taskDbRepository.edit(editedTask);

module.exports = { get, add, deleteTask, edit };
