import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Ini adalah file testing dari app,
// jadi di dalam pembuatan project  ada namanya tahap development dan prodaction
//sebelum masuk ke tahap production, seharunya ada testing testing terlebih dahulu
