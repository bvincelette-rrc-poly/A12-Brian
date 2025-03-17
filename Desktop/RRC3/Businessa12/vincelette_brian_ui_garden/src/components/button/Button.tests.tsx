import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('is visible', () => {
    render(<Button text="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Button text="Test Button" disabled />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveStyle('background-color: #cccccc');
  });
});