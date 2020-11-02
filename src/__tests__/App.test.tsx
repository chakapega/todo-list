import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../components/App';

const renderComponent = () => render(<App />);

describe('App', () => {
  it('renders Container', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toBeInTheDocument();
  });
});
