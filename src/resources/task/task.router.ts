export{};

const taskRouter = require("express").Router();
const catchError = require("../../common/catchError");
const { OK } = require("http-status-codes");

taskRouter.route("/tasks").get(
  catchError(async (req, res) => {
    const tasks = [
      {
        id: 1,
        taskDescription: "task description 1",
      },
      {
        id: 2,
        taskDescription: "task description 2",
      },
      {
        id: 3,
        taskDescription: "task description 3",
      },
    ];

    res.status(OK).json(tasks);
  })
);

module.exports = taskRouter;
