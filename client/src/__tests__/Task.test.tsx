import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

import Task from '../components/Task';
import taskService from '../services/TaskService';

const mockTask = {
  id: '3',
  taskDescription: 'task description 3',
  date: '03/11/2020 10:43:09',
};

const renderComponent = () =>
  render(
    <Provider store={store}>
      <Task task={mockTask} />
    </Provider>,
  );

jest.mock('../services/TaskService.ts', () => ({ deleteTask: jest.fn() }));

describe('renders Task', () => {
  it('renders ListItem', () => {
    const { getByRole } = renderComponent();
    const listItem = getByRole('listitem');

    expect(listItem).toBeInTheDocument();
  });

  it('renders ListItemText', () => {
    const { getByText } = renderComponent();
    const { taskDescription } = mockTask;
    const listItemText = getByText(taskDescription);

    expect(listItemText).toBeInTheDocument();
  });

  it('renders DateRangeIcon', () => {
    const { getByText } = renderComponent();
    const { date } = mockTask;
    const dateRangeIcon = getByText(date);

    expect(dateRangeIcon).toBeInTheDocument();
  });

  it('renders EditOutlinedIcon', () => {
    const { getByText } = renderComponent();
    const editOutlinedIcon = getByText('Edit task');

    expect(editOutlinedIcon).toBeInTheDocument();
  });

  it('renders DeleteForeverIcon', () => {
    const { getByText } = renderComponent();
    const deleteForeverIcon = getByText('Delete task');

    expect(deleteForeverIcon).toBeInTheDocument();
  });
});

describe('checks Task', () => {
  it('checks the call to the deleteTask method from the task service', () => {
    const { getByText } = renderComponent();
    const deleteForeverIcon = getByText('Delete task');
    const { deleteTask } = taskService;

    fireEvent.click(deleteForeverIcon);
    expect(deleteTask).toBeCalled();
  });
});
