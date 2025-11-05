import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App component', () => {
  it('renders Vite + React text', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeDefined();
  });

  it('renders count button', () => {
    render(<App />);
    expect(screen.getByText(/count is/i)).toBeDefined();
  });
});