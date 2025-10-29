import React, { useState } from 'react';
import './Counter.css';

interface CounterProps {
  initialValue?: number;
  step?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <div className="counter-display" data-testid="counter-value">
        Count: {count}
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} data-testid="decrement-btn">
          - Decrement
        </button>
        <button onClick={reset} data-testid="reset-btn">
          Reset
        </button>
        <button onClick={increment} data-testid="increment-btn">
          + Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
