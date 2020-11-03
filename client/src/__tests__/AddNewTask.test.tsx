import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import AddNewTask from '../components/AddNewTask';
// import taskService from '../services/TaskService';

jest.mock('../services/TaskService.ts', () => ({ addTask: jest.fn() }));

const renderComponent = () => render(<AddNewTask />);

describe('AddNewTask', () => {
  it('renders Container', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('renders Typography', () => {
    const { getByText } = renderComponent();
    const typography = getByText('Add new task');

    expect(typography).toBeInTheDocument();
    expect(typography).toHaveTextContent('Add new task');
  });

  it('renders form', () => {
    const { container } = renderComponent();

    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('renders TextField', () => {
    const { container } = renderComponent();
    const textFieldLabel = container.querySelector('label');

    expect(textFieldLabel).toBeInTheDocument();
    expect(textFieldLabel).toHaveTextContent('Write your task');
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders Button', () => {
    const { container } = renderComponent();
    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add');
  });

  it('checks the Button disabled attribute', () => {
    const { container } = renderComponent();
    const button = container.querySelector('button');

    expect(button).toBeDisabled();
    fireEvent.change(container.querySelector('input'), { target: { value: 'writed text' } });
    expect(button).not.toBeDisabled();
  });

  // it('checks the call to the addTask method from the service', () => {
  //   const { container } = renderComponent();
  //   const { addTask } = taskService;

  //   fireEvent.submit(container.querySelector('form'));
  //   expect(addTask).toBeCalled();
  // });
});
