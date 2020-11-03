export {};

const express = require('express');
const taskRouter = express.Router();
const taskService = require('./task.service');
const errorCatcher = require('../../middlewares/errorCatcher');
const { OK } = require('http-status-codes');

taskRouter.route('/tasks').get(
  errorCatcher((req, res): void => {
    const tasks = taskService.get();

    res.status(OK).json(tasks);
  }),
);

taskRouter.route('/add-task').post(
  errorCatcher((req, res): void => {
    taskService.add(req.body);

    res.status(OK).json();
  }),
);

taskRouter.route('/delete-task').delete(
  errorCatcher(
    async (req, res): Promise<void> => {
      const { id } = req.body;

      taskService.deleteTask(id);

      res.status(OK).json();
    },
  ),
);

module.exports = taskRouter;
