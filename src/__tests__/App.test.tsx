import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../components/App';

const renderComponent = () => render(<App />);

describe('App', () => {
  it('renders Container', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('app-container')).toBeInTheDocument();
  });
});
