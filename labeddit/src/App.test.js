import { render, screen } from '@testing-library/react';
import App from './App';

test('Testa se a página inicial renderizada possui o texto LabEddit', () => {
  render(<App />);
  const Title = screen.getByText(/LabEddit/i);
  expect(Title).toBeInTheDocument();
});
