/**
 * Utility functions for mathematical calculations
 */

/**
 * Calculates the sum of an array of numbers
 */
export const sum = (numbers: number[]): number => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

/**
 * Calculates the average of an array of numbers
 */
export const average = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
};

/**
 * Finds the maximum value in an array of numbers
 */
export const max = (numbers: number[]): number | null => {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
};

/**
 * Finds the minimum value in an array of numbers
 */
export const min = (numbers: number[]): number | null => {
  if (numbers.length === 0) return null;
  return Math.min(...numbers);
};

/**
 * Checks if a number is even
 */
export const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

/**
 * Checks if a number is odd
 */
export const isOdd = (num: number): boolean => {
  return num % 2 !== 0;
};

/**
 * Filters even numbers from an array
 */
export const filterEven = (numbers: number[]): number[] => {
  return numbers.filter(isEven);
};

/**
 * Filters odd numbers from an array
 */
export const filterOdd = (numbers: number[]): number[] => {
  return numbers.filter(isOdd);
};

/**
 * Calculates factorial of a number
 */
export const factorial = (n: number): number => {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

/**
 * Checks if a number is prime
 */
export const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
};
