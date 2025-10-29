# Jest Testing Demo App

A React application with components and utility functions designed to demonstrate Jest testing practices. This project includes comprehensive test suites covering various testing scenarios including component interactions, state management, and utility functions.

## 🎯 Purpose

This repository serves as a learning resource for:
- Writing unit tests with Jest
- Testing React components with React Testing Library
- Testing user interactions and state changes
- Writing utility function tests
- Achieving high test coverage

## 📦 What's Included

### Components
1. **Counter Component** (`src/components/Counter.tsx`)
   - Demonstrates state management
   - Includes increment, decrement, and reset functionality
   - Supports custom initial values and step sizes
   - Tests: 10 test cases covering all functionality

2. **TodoList Component** (`src/components/TodoList.tsx`)
   - More complex component with multiple features
   - Add, toggle, delete todo items
   - Filter todos (all, active, completed)
   - Clear completed todos
   - Tests: 16 test cases covering all user interactions

### Utility Functions
1. **Math Utilities** (`src/utils/mathUtils.ts`)
   - Functions: sum, average, max, min, isEven, isOdd, filterEven, filterOdd, factorial, isPrime
   - Tests: 40 test cases

2. **String Utilities** (`src/utils/stringUtils.ts`)
   - Functions: capitalize, reverseString, isPalindrome, wordCount, truncate, toTitleCase, removeWhitespace, countOccurrences, isNumeric, camelToKebab
   - Tests: 45 test cases

### Total Test Coverage
- **111 tests** covering all functionality
- High code coverage (>90% for components and utilities)

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/Jump0ts/jest_repository.git
cd jest_repository

# Install dependencies
npm install
```

## 📝 Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode. This will run all tests and watch for changes.

### `npm test -- --watchAll=false`
Runs all tests once without watch mode.

### `npm test -- --coverage`
Runs all tests and generates a coverage report showing how much of your code is covered by tests.

### `npm test -- --verbose`
Runs tests with detailed output showing each individual test case.

### `npm run build`
Builds the app for production to the `build` folder.

## 🧪 Testing Guide

### Running Tests

```bash
# Run all tests in watch mode
npm test

# Run tests once (useful for CI/CD)
npm test -- --watchAll=false

# Run tests with coverage report
npm test -- --coverage

# Run tests for a specific file
npm test Counter.test

# Run tests in verbose mode
npm test -- --verbose
```

### Understanding Test Files

Each component and utility has a corresponding `.test.tsx` or `.test.ts` file:

- `src/App.test.tsx` - Tests for main App component
- `src/components/Counter.test.tsx` - Tests for Counter component
- `src/components/TodoList.test.tsx` - Tests for TodoList component
- `src/utils/mathUtils.test.ts` - Tests for math utility functions
- `src/utils/stringUtils.test.ts` - Tests for string utility functions

### Test Structure

Tests follow the Arrange-Act-Assert (AAA) pattern:

```typescript
test('increments counter by default step (1)', () => {
  // Arrange: Set up the test
  render(<Counter />);
  const incrementBtn = screen.getByTestId('increment-btn');
  const counterValue = screen.getByTestId('counter-value');

  // Act: Perform the action
  fireEvent.click(incrementBtn);

  // Assert: Verify the result
  expect(counterValue).toHaveTextContent('Count: 1');
});
```

### Key Testing Concepts Demonstrated

1. **Component Rendering Tests** - Verify components render correctly
2. **User Interaction Tests** - Test button clicks, input changes, keyboard events
3. **State Management Tests** - Verify state updates correctly
4. **Conditional Rendering Tests** - Test components that show/hide based on state
5. **Props Testing** - Test components with different prop values
6. **Edge Cases** - Test boundary conditions and error cases
7. **Utility Function Tests** - Test pure functions with various inputs

## 📊 Test Coverage

Run `npm test -- --coverage` to see detailed coverage report:

```
File                 | % Stmts | % Branch | % Funcs | % Lines
---------------------|---------|----------|---------|--------
All files            |   91.42 |    92.42 |   96.15 |   90.51
 components          |     100 |      100 |     100 |     100
  Counter.tsx        |     100 |      100 |     100 |     100
  TodoList.tsx       |     100 |      100 |     100 |     100
 utils               |    98.7 |    96.87 |     100 |     100
  mathUtils.ts       |   97.56 |    95.83 |     100 |     100
  stringUtils.ts     |     100 |      100 |     100 |     100
```

## 🛠️ Technologies Used

- **React** (v19.2.0) - UI library
- **TypeScript** (v4.9.5) - Type safety
- **Jest** (included with react-scripts) - Testing framework
- **React Testing Library** (v16.3.0) - React component testing utilities
- **Create React App** - Project scaffolding

## 📚 Learning Resources

### Official Documentation
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### What You'll Learn
- Writing effective unit tests
- Testing user interactions
- Mocking and stubbing
- Test-driven development (TDD)
- Code coverage analysis
- Testing best practices

## 🤝 Contributing

Feel free to fork this repository and experiment with adding more components and tests!

## 📄 License

This project is open source and available for educational purposes.
