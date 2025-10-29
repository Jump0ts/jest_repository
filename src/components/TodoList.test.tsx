import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList, { Todo } from './TodoList';

describe('TodoList Component', () => {
  const mockInitialTodos: Todo[] = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Jest', completed: true },
    { id: 3, text: 'Build a project', completed: false },
  ];

  test('renders empty todo list', () => {
    render(<TodoList />);
    expect(screen.getByTestId('empty-state')).toBeInTheDocument();
    expect(screen.getByTestId('empty-state')).toHaveTextContent('No todos yet. Add one above!');
  });

  test('renders with initial todos', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-btn');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-btn');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    expect(screen.getByTestId('empty-state')).toBeInTheDocument();
  });

  test('adds todo on Enter key press', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    const checkbox = screen.getByTestId('todo-checkbox-1');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('deletes a todo', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    const deleteButton = screen.getByTestId('delete-todo-1');

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('filters show all todos', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    const filterAll = screen.getByTestId('filter-all');

    fireEvent.click(filterAll);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
  });

  test('filters show only active todos', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    const filterActive = screen.getByTestId('filter-active');

    fireEvent.click(filterActive);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
  });

  test('filters show only completed todos', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    const filterCompleted = screen.getByTestId('filter-completed');

    fireEvent.click(filterCompleted);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.queryByText('Build a project')).not.toBeInTheDocument();
  });

  test('displays correct count for each filter', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    
    expect(screen.getByTestId('filter-all')).toHaveTextContent('All (3)');
    expect(screen.getByTestId('filter-active')).toHaveTextContent('Active (2)');
    expect(screen.getByTestId('filter-completed')).toHaveTextContent('Completed (1)');
  });

  test('clears completed todos', () => {
    render(<TodoList initialTodos={mockInitialTodos} />);
    const clearButton = screen.getByTestId('clear-completed-btn');

    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    fireEvent.click(clearButton);
    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
  });

  test('clear completed button only shows when there are completed todos', () => {
    render(<TodoList initialTodos={[{ id: 1, text: 'Test', completed: false }]} />);
    expect(screen.queryByTestId('clear-completed-btn')).not.toBeInTheDocument();
  });

  test('shows appropriate empty state messages for each filter', () => {
    render(<TodoList />);
    
    const filterActive = screen.getByTestId('filter-active');
    const filterCompleted = screen.getByTestId('filter-completed');

    expect(screen.getByTestId('empty-state')).toHaveTextContent('No todos yet. Add one above!');

    fireEvent.click(filterActive);
    expect(screen.getByTestId('empty-state')).toHaveTextContent('No active todos!');

    fireEvent.click(filterCompleted);
    expect(screen.getByTestId('empty-state')).toHaveTextContent('No completed todos!');
  });

  test('updates count after adding todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-btn');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByTestId('filter-all')).toHaveTextContent('All (1)');
    expect(screen.getByTestId('filter-active')).toHaveTextContent('Active (1)');
    expect(screen.getByTestId('filter-completed')).toHaveTextContent('Completed (0)');
  });

  test('updates count after toggling todo', () => {
    render(<TodoList initialTodos={[{ id: 1, text: 'Test', completed: false }]} />);
    const checkbox = screen.getByTestId('todo-checkbox-1');

    fireEvent.click(checkbox);

    expect(screen.getByTestId('filter-active')).toHaveTextContent('Active (0)');
    expect(screen.getByTestId('filter-completed')).toHaveTextContent('Completed (1)');
  });
});
