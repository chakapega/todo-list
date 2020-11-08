import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

import taskService from '../services/TaskService';
import AddTask from '../components/AddTask';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <AddTask />
    </Provider>,
  );

jest.mock('../services/TaskService.ts', () => ({ add: jest.fn() }));

describe('renders AddTask', () => {
  it('renders Container', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('renders Typography', () => {
    const { getByText } = renderComponent();
    const typography = getByText('Add new task');

    expect(typography).toBeInTheDocument();
  });

  it('renders form', () => {
    const { container } = renderComponent();
    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });

  it('renders TextField', () => {
    const { container, getByRole } = renderComponent();
    const label = container.querySelector('label');
    const input = getByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Write your task');
    expect(input).toBeInTheDocument();
  });

  it('renders Button', () => {
    const { getByRole } = renderComponent();
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add');
  });
});

describe('checks AddTask', () => {
  it('checks the Button disabled attribute', () => {
    const { getByRole } = renderComponent();
    const button = getByRole('button');
    const input = getByRole('textbox');

    expect(button).toBeDisabled();
    fireEvent.change(input, { target: { value: 'writed text' } });
    expect(button).not.toBeDisabled();
  });

  it('checks the call to the add method from the task service', () => {
    const { container } = renderComponent();
    const form = container.querySelector('form');
    const { add } = taskService;

    fireEvent.submit(form);
    expect(add).toBeCalled();
  });
});
