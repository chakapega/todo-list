export {};

const taskDbRepository = require('./task.db.repository');

const get = () => taskDbRepository.get();

const add = (task) => taskDbRepository.add(task);

module.exports = { get, add };
