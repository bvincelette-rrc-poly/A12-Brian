import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Vincelette_Brian_UI_Garden/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders storybook instruction', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Please use Storybook to view the component library/i);
  expect(paragraphElement).toBeInTheDocument();
});