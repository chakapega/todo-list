export {};

const taskDbRepository = require('./task.db.repository');

const get = () => taskDbRepository.get();

module.exports = { get };
