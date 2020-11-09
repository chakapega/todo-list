import express from 'express';
import { StatusCodes } from 'http-status-codes';

import taskService from './taskService';
import errorCatcher from '../../middlewares/errorCatcher';

const taskRouter = express.Router();

taskRouter.route('/tasks').get(
  errorCatcher(async (req, res) => {
    const tasks = await taskService.get();

    res.status(StatusCodes.OK).json(tasks);
  })
);

taskRouter.route('/add-task').post(
  errorCatcher(async (req, res) => {
    await taskService.add(req.body);

    res.status(StatusCodes.OK).json();
  })
);

taskRouter.route('/delete-task').delete(
  errorCatcher(async (req, res) => {
    const { id } = req.body;

    await taskService.deleteTask(id);

    res.status(StatusCodes.OK).json();
  })
);

taskRouter.route('/edit-task').put(
  errorCatcher(async (req, res) => {
    await taskService.edit(req.body);

    res.status(StatusCodes.OK).json();
  })
);

export default taskRouter;
