import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App'; // Adjust according to your file structure

test('changes to dark mode when the button is clicked', () => {
  render(<App />);

  // Click the "Dark Mode" button
  fireEvent.click(screen.getByRole('button', { name: /Dark Mode/i }));

  // Check if the dark mode class is applied
  expect(screen.getByRole('button', { name: /Light Mode/i })).toBeInTheDocument();
  expect(screen.getByText('Shopster')).toHaveClass('dark');
});

test('changes back to light mode when the button is clicked again', () => {
  render(<App />);

  // Click the "Dark Mode" button
  fireEvent.click(screen.getByRole('button', { name: /Dark Mode/i }));

  // Click the "Light Mode" button
  fireEvent.click(screen.getByRole('button', { name: /Light Mode/i }));

  // Check if the light mode class is applied
  expect(screen.getByRole('button', { name: /Dark Mode/i })).toBeInTheDocument();
  expect(screen.getByText('Shopster')).toHaveClass('light');
});
