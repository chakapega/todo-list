import React from 'react';
import { useSelector } from 'react-redux';

import EditTask from '../EditTask';
import AddNewTask from '../AddTask';
import { StoreStateType } from '../../types';

const WrapperOfAddAndEditTask = (): JSX.Element => {
  const dataOfEditedTask = useSelector((state: StoreStateType) => state.task.dataOfEditedTask);

  return (
    <>
      {dataOfEditedTask && <EditTask />}
      {!dataOfEditedTask && <AddNewTask />}
    </>
  );
};

export default WrapperOfAddAndEditTask;
