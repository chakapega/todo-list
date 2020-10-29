import React from 'react';
import { render } from '@testing-library/react';
import AddNewTask from '../components/AddNewTask';

describe('AddNewTask', () => {
  it('renders AddNewTask component', () => {
    render(<AddNewTask />);
  });
});
