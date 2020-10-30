import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import AddNewTask from '../components/AddNewTask';

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

    expect(container.querySelector('label')).toBeInTheDocument();
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders Button', () => {
    const { container } = renderComponent();
    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add');
  });

  it('check Button disabled attribute', () => {
    const { container } = renderComponent();
    const button = container.querySelector('button');

    expect(button.disabled).toBe(true);
    fireEvent.change(container.querySelector('input'), { target: { value: 'writed text' } });
    expect(button.disabled).toBe(false);
  });
});
