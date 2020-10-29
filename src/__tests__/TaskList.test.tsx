import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  it('renders TaskList component', () => {
    render(<TaskList />);
  });
});
