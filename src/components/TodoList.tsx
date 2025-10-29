import React, { useState } from 'react';
import './TodoList.css';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  initialTodos?: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ initialTodos = [] }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [inputValue, setInputValue] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const getFilteredTodos = (): Todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-list">
      <h2>Todo List Component</h2>
      
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
          data-testid="todo-input"
        />
        <button onClick={addTodo} data-testid="add-todo-btn">
          Add
        </button>
      </div>

      <div className="todo-filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
          data-testid="filter-all"
        >
          All ({todos.length})
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
          data-testid="filter-active"
        >
          Active ({activeTodosCount})
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
          data-testid="filter-completed"
        >
          Completed ({completedTodosCount})
        </button>
      </div>

      {filteredTodos.length === 0 ? (
        <div className="empty-state" data-testid="empty-state">
          {filter === 'all' && 'No todos yet. Add one above!'}
          {filter === 'active' && 'No active todos!'}
          {filter === 'completed' && 'No completed todos!'}
        </div>
      ) : (
        <ul className="todos" data-testid="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                data-testid={`todo-checkbox-${todo.id}`}
              />
              <span className="todo-text" data-testid={`todo-text-${todo.id}`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                data-testid={`delete-todo-${todo.id}`}
                className="delete-btn"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {completedTodosCount > 0 && (
        <div className="todo-actions">
          <button onClick={clearCompleted} data-testid="clear-completed-btn">
            Clear Completed ({completedTodosCount})
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
