import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setTasks } from '../../store/task/actionCreators';
import { List } from '@material-ui/core';
import Task from '../Task';
import { TaskListType, TaskType } from '../../types';
import taskService from '../../services/TaskService';

const TaskList = ({ tasks, setTasks }: TaskListType): JSX.Element => {
  useEffect((): void => {
    const { get } = taskService;

    get().then((tasks) => setTasks(tasks));
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

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks: (tasks) => dispatch(setTasks(tasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
