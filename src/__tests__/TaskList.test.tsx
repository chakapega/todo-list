import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';
import taskService from '../services/TaskService';

const renderComponent = () => render(<TaskList />);
const mockTasks = [
  {
    id: 1,
    taskDescription: 'task description 1',
  },
  {
    id: 2,
    taskDescription: 'task description 2',
  },
];

jest.mock('../services/TaskService.ts', () => ({ getTasks: jest.fn(() => mockTasks), subscribe: jest.fn() }));

describe('TaskList', () => {
  it('renders List', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toBeInTheDocument();
  });

  it('checks the call to the subscribe method from the service', () => {
    renderComponent();

    const { subscribe } = taskService;

    expect(subscribe).toBeCalled();
  });

  it('checks the call to the getTasks method from the service', () => {
    renderComponent();

    const { getTasks } = taskService;

    expect(getTasks).toBeCalled();
  });
});
