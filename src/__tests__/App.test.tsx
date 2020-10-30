import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

const renderComponent = () => render(<App />);

describe('App', () => {
  it('renders App component', () => {
    const { getByTestId } = renderComponent();
    const appContainer = getByTestId('app-container');

    expect(appContainer).toBeDefined();
  });
});
