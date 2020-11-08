import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTasks } from '../../store/task/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import Task from '../Task';
import taskService from '../../services/TaskService';
import { StoreStateType } from '../../types';

const useStyles = makeStyles({
  list: {
    width: '95%',
    padding: '0',
  },
});

const TaskList: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const tasks = useSelector((state: StoreStateType) => state.task.tasks);

  const getTasks = async () => {
    const { get } = taskService;
    const tasks = await get();

    dispatch(setTasks(tasks));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <List className={classes.list}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
