import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import TaskList from '../components/TaskList';
import taskService from '../services/TaskService';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <TaskList />
    </Provider>,
  );

jest.mock('../services/TaskService.ts', () => ({ get: jest.fn(() => []) }));

describe('renders TaskList', () => {
  it('renders List', () => {
    const { getByRole } = renderComponent();
    const list = getByRole('list');

    expect(list).toBeInTheDocument();
  });
});

describe('checks TaskList', () => {
  it('checks the call to the get method from the task service', () => {
    renderComponent();

    const { get } = taskService;

    expect(get).toBeCalled();
  });
});
