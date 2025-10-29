import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders main heading', () => {
    render(<App />);
    const heading = screen.getByText(/Jest Testing Demo App/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders description', () => {
    render(<App />);
    const description = screen.getByText(/A React application with components to learn Jest testing/i);
    expect(description).toBeInTheDocument();
  });

  test('renders Counter component', () => {
    render(<App />);
    const counterHeading = screen.getByText(/Counter Component/i);
    expect(counterHeading).toBeInTheDocument();
  });

  test('renders TodoList component', () => {
    render(<App />);
    const todoHeading = screen.getByText(/Todo List Component/i);
    expect(todoHeading).toBeInTheDocument();
  });

  test('renders footer with test command', () => {
    render(<App />);
    const footer = screen.getByText(/npm test/i);
    expect(footer).toBeInTheDocument();
  });
});

