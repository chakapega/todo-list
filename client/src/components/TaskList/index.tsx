import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTasks } from '../../store/task/actionCreators';
import { List } from '@material-ui/core';
import Task from '../Task';
import { TaskType } from '../../types';
import taskService from '../../services/TaskService';
import { StoreStateType } from '../../types';

const TaskList = (): JSX.Element => {
  const tasks = useSelector((state: StoreStateType) => state.task.tasks);

  const dispatch = useDispatch();

  useEffect((): void => {
    const { get } = taskService;

    get().then((tasks) => dispatch(setTasks(tasks)));
  }, []);

  return (
    <List>
      {tasks.map((task: TaskType) => {
        const { id } = task;

        return <Task key={id} task={task} />;
      })}
    </List>
  );
};

export default TaskList;
