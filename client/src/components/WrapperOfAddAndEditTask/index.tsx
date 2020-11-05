import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '@material-ui/core';
import EditTask from '../EditTask';
import AddNewTask from '../AddTask';
import { StoreStateType } from '../../types';

const WrapperOfAddAndEditTask = (): JSX.Element => {
  const dataOfEditedTask = useSelector((state: StoreStateType) => state.task.dataOfEditedTask);

  return (
    <Container>
      {dataOfEditedTask && <EditTask />}
      {!dataOfEditedTask && <AddNewTask />}
    </Container>
  );
};

export default WrapperOfAddAndEditTask;
