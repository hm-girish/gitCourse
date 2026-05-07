import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Calculator App', () => {
  it('renders the app header', () => {
    render(<App />);
    expect(screen.getByText(/Calculator App/i)).toBeInTheDocument();
  });

  it('shows simple calculator mode by default', () => {
    render(<App />);
    expect(screen.getByText(/Simple Calculator/i)).toBeInTheDocument();
  });
});
