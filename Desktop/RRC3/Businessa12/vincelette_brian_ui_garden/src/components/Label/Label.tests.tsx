import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  test('is visible', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeVisible();
  });

  test('changes color when disabled', () => {
    render(<Label text="Test Label" disabled />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toHaveStyle('color: #cccccc');
  });
});
