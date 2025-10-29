import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList", () => {
	test("renders correctly with no initial todos", () => {
		render(<TodoList />);
		expect(screen.getByTestId("todo-list-component")).toBeInTheDocument();
	});

	test("renders correctly with initial todos", () => {
		render(
			<TodoList
				initialTodos={[{ id: 1, text: "Test Todo", completed: false }]}
			/>
		);
		expect(screen.getByTestId("todo-list-component")).toBeInTheDocument();
		expect(screen.getByTestId("todo-text-1")).toHaveTextContent("Test Todo");
	});

	test("adds a new todo", () => {
		render(<TodoList />);
		const input = screen.getByTestId("todo-input") as HTMLInputElement;
		const addButton = screen.getByTestId("add-todo-btn");
		fireEvent.change(input, { target: { value: "New Todo" } });
		fireEvent.click(addButton);
		expect(screen.getByText("New Todo")).toBeInTheDocument();
	});

	test("toggles a todo's completed status", () => {
		render(
			<TodoList
				initialTodos={[{ id: 1, text: "Test Todo", completed: false }]}
			/>
		);
		const checkbox = screen.getByTestId("todo-checkbox-1");
		fireEvent.click(checkbox);
		expect(screen.getByTestId("1")).toHaveClass("completed");
	});

	test("deletes a todo", () => {
		render(
			<TodoList
				initialTodos={[{ id: 1, text: "Test Todo", completed: false }]}
			/>
		);
		const deleteButton = screen.getByTestId("delete-todo-1");
		fireEvent.click(deleteButton);
		expect(screen.queryByTestId("1")).not.toBeInTheDocument();
	});

	test("clears completed todos", () => {
		render(
			<TodoList
				initialTodos={[
					{ id: 1, text: "Test Todo 1", completed: true },
					{ id: 2, text: "Test Todo 2", completed: false },
				]}
			/>
		);
		const clearButton = screen.getByTestId("clear-completed-btn");
		fireEvent.click(clearButton);
		expect(screen.queryByTestId("1")).not.toBeInTheDocument();
		expect(screen.getByTestId("2")).toBeInTheDocument();
	});

	test("filters todos", () => {
		render(
			<TodoList
				initialTodos={[
					{ id: 1, text: "Test Todo 1", completed: true },
					{ id: 2, text: "Test Todo 2", completed: false },
				]}
			/>
		);
		const activeFilterButton = screen.getByTestId("filter-active");
		fireEvent.click(activeFilterButton);
		expect(screen.getByTestId("2")).toBeInTheDocument();
		expect(screen.queryByTestId("1")).not.toBeInTheDocument();
	});
});
