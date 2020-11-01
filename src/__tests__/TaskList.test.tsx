import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  it('renders List', () => {
    const { container } = render(<TaskList />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
