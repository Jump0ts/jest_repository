import React from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jest Testing Demo App</h1>
        <p>A React application with components to learn Jest testing</p>
      </header>
      
      <main className="App-main">
        <Counter initialValue={0} step={1} />
        <TodoList />
      </main>
      
      <footer className="App-footer">
        <p>
          Run <code>npm test</code> to see all tests in action!
        </p>
      </footer>
    </div>
  );
}

export default App;
