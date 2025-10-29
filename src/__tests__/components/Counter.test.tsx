import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../../components/Counter";
import "@testing-library/jest-dom";

describe("Counter", () => {
	it("renders correctly", () => {
		render(<Counter />);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: 0");
	});

	test("renders with custom initial value", () => {
		render(<Counter initialValue={5} />);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: 5");
	});

	test("increments the count", () => {
		render(<Counter />);
		const incrementButton = screen.getByTestId("increment-btn");
		fireEvent.click(incrementButton);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: 1");
	});

	test("increments the count on 3", () => {
		render(<Counter />);
		const incrementButton = screen.getByTestId("increment-btn");
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: 3");
	});

	it("decrements the count", () => {
		render(<Counter />);
		const decrementButton = screen.getByTestId("decrement-btn");
		fireEvent.click(decrementButton);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: -1");
	});

	it("decrements the count on 3", () => {
		render(<Counter />);
		const decrementButton = screen.getByTestId("decrement-btn");
		fireEvent.click(decrementButton);
		fireEvent.click(decrementButton);
		fireEvent.click(decrementButton);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: -3");
	});

	it("resets the count", () => {
		render(<Counter />);
		const incrementButton = screen.getByTestId("increment-btn");
		const resetButton = screen.getByTestId("reset-btn");
		fireEvent.click(incrementButton);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: 1");
		fireEvent.click(resetButton);
		expect(screen.getByTestId("counter-value")).toHaveTextContent("Count: 0");
	});
});
