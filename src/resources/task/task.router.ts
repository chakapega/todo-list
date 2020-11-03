export {};

const taskRouter = require('express').Router();
const taskService = require('./task.service');
const catchError = require('../../common/catchError');
const { OK } = require('http-status-codes');

taskRouter.route('/tasks').get(
  catchError((req, res) => {
    const tasks = taskService.get();

    res.status(OK).json(tasks);
  }),
);

taskRouter.route('/add-task').post(
  catchError((req, res) => {
    taskService.add(req.body);

    res.status(OK).json();
  }),
);

module.exports = taskRouter;
