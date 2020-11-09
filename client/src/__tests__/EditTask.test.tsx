import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

import taskService from '../services/TaskService';
import EditTask from '../components/EditTask';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <EditTask />
    </Provider>
  );

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockReturnValue({ id: '1', taskDescription: 'task description' }),
}));

jest.mock('../services/TaskService.ts', () => ({ edit: jest.fn() }));

describe('renders EditTask', () => {
  it('renders Container', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('renders Typography', () => {
    const { getByText } = renderComponent();
    const typography = getByText('Edit your task');

    expect(typography).toBeInTheDocument();
  });

  it('renders form', () => {
    const { container } = renderComponent();
    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });

  it('renders TextField', () => {
    const { getByRole } = renderComponent();
    const input = getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('renders Edit Button', () => {
    const { getByRole } = renderComponent();
    const button = getByRole('button', { name: 'Edit' });

    expect(button).toBeInTheDocument();
  });

  it('renders Cancel Button', () => {
    const { getByRole } = renderComponent();
    const button = getByRole('button', { name: 'Cancel' });

    expect(button).toBeInTheDocument();
  });
});

describe('checks EditTask', () => {
  it('checks the Edit Button disabled attribute', () => {
    const { getByRole } = renderComponent();
    const button = getByRole('button', { name: 'Edit' });
    const input = getByRole('textbox');

    expect(button).not.toBeDisabled();
    fireEvent.change(input, { target: { value: '' } });
    expect(button).toBeDisabled();
  });

  it('checks the call to the edit method from the task service', () => {
    const { container } = renderComponent();
    const form = container.querySelector('form');
    const { edit } = taskService;

    fireEvent.submit(form);
    expect(edit).toBeCalled();
  });
});
