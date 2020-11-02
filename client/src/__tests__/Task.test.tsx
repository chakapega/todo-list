import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Task from '../components/Task';
import taskService from '../services/TaskService';

jest.mock('../services/TaskService.ts', () => ({ deleteTask: jest.fn() }));

const mockTaskProps = {
  id: 1,
  taskDescription: 'task description',
};
const renderComponent = () => render(<Task task={mockTaskProps} />);

describe('Task', () => {
  it('renders ListItem', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders ListItemText', () => {
    const { getByText } = renderComponent();
    const { taskDescription } = mockTaskProps;
    const listItemText = getByText(taskDescription);

    expect(listItemText).toBeInTheDocument();
    expect(listItemText).toHaveTextContent(taskDescription);
  });

  it('renders DeleteForeverIcon', () => {
    const { container } = renderComponent();
    const deleteForeverIcon = container.querySelector('svg');

    expect(deleteForeverIcon).toBeInTheDocument();
  });

  it('checks the call to the deleteTask method from the service', () => {
    const { container } = renderComponent();
    const deleteForeverIcon = container.querySelector('svg');
    const { deleteTask } = taskService;

    fireEvent.click(deleteForeverIcon);
    expect(deleteTask).toBeCalled();
  });
});
