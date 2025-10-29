import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders counter with default initial value', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('Count: 0');
  });

  test('renders counter with custom initial value', () => {
    render(<Counter initialValue={10} />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('Count: 10');
  });

  test('increments counter by default step (1)', () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('Count: 1');

    fireEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('Count: 2');
  });

  test('increments counter by custom step', () => {
    render(<Counter initialValue={0} step={5} />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('Count: 5');

    fireEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('Count: 10');
  });

  test('decrements counter by default step (1)', () => {
    render(<Counter initialValue={5} />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('Count: 4');

    fireEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('Count: 3');
  });

  test('decrements counter by custom step', () => {
    render(<Counter initialValue={20} step={5} />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('Count: 15');

    fireEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('Count: 10');
  });

  test('resets counter to initial value', () => {
    render(<Counter initialValue={10} />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const resetBtn = screen.getByTestId('reset-btn');
    const counterValue = screen.getByTestId('counter-value');

    // Increment a few times
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue).toHaveTextContent('Count: 12');

    // Reset
    fireEvent.click(resetBtn);
    expect(counterValue).toHaveTextContent('Count: 10');
  });

  test('handles negative values correctly', () => {
    render(<Counter initialValue={0} />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('Count: -1');

    fireEvent.click(decrementBtn);
    expect(counterValue).toHaveTextContent('Count: -2');
  });

  test('renders all buttons', () => {
    render(<Counter />);
    
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
    expect(screen.getByTestId('reset-btn')).toBeInTheDocument();
  });

  test('buttons have correct text', () => {
    render(<Counter />);
    
    expect(screen.getByTestId('increment-btn')).toHaveTextContent('+ Increment');
    expect(screen.getByTestId('decrement-btn')).toHaveTextContent('- Decrement');
    expect(screen.getByTestId('reset-btn')).toHaveTextContent('Reset');
  });
});
