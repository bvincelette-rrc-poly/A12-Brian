import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('Text is visible', () => {
  render(<Text>Hello</Text>);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('Text has disabled style', () => {
  render(<Text disabled>Disabled</Text>);
  expect(screen.getByText('Disabled')).toHaveStyle('color: #ccc');
});
