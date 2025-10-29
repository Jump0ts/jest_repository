import {
  sum,
  average,
  max,
  min,
  isEven,
  isOdd,
  filterEven,
  filterOdd,
  factorial,
  isPrime,
} from './mathUtils';

describe('mathUtils', () => {
  describe('sum', () => {
    test('calculates sum of positive numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('calculates sum of negative numbers', () => {
      expect(sum([-1, -2, -3])).toBe(-6);
    });

    test('calculates sum of mixed numbers', () => {
      expect(sum([1, -2, 3, -4, 5])).toBe(3);
    });

    test('returns 0 for empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('returns the number itself for single element array', () => {
      expect(sum([42])).toBe(42);
    });
  });

  describe('average', () => {
    test('calculates average of numbers', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    test('calculates average with decimals', () => {
      expect(average([1, 2, 3, 4])).toBe(2.5);
    });

    test('returns 0 for empty array', () => {
      expect(average([])).toBe(0);
    });

    test('calculates average of negative numbers', () => {
      expect(average([-2, -4, -6])).toBe(-4);
    });
  });

  describe('max', () => {
    test('finds maximum value', () => {
      expect(max([1, 5, 3, 9, 2])).toBe(9);
    });

    test('finds maximum in negative numbers', () => {
      expect(max([-5, -1, -10, -3])).toBe(-1);
    });

    test('returns null for empty array', () => {
      expect(max([])).toBeNull();
    });

    test('works with single element', () => {
      expect(max([42])).toBe(42);
    });
  });

  describe('min', () => {
    test('finds minimum value', () => {
      expect(min([5, 1, 9, 2, 3])).toBe(1);
    });

    test('finds minimum in negative numbers', () => {
      expect(min([-5, -1, -10, -3])).toBe(-10);
    });

    test('returns null for empty array', () => {
      expect(min([])).toBeNull();
    });

    test('works with single element', () => {
      expect(min([42])).toBe(42);
    });
  });

  describe('isEven', () => {
    test('returns true for even positive numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(100)).toBe(true);
    });

    test('returns false for odd positive numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(99)).toBe(false);
    });

    test('returns true for 0', () => {
      expect(isEven(0)).toBe(true);
    });

    test('works with negative numbers', () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('isOdd', () => {
    test('returns true for odd positive numbers', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(3)).toBe(true);
      expect(isOdd(99)).toBe(true);
    });

    test('returns false for even positive numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(4)).toBe(false);
      expect(isOdd(100)).toBe(false);
    });

    test('returns false for 0', () => {
      expect(isOdd(0)).toBe(false);
    });

    test('works with negative numbers', () => {
      expect(isOdd(-3)).toBe(true);
      expect(isOdd(-2)).toBe(false);
    });
  });

  describe('filterEven', () => {
    test('filters even numbers from array', () => {
      expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('returns empty array when no even numbers', () => {
      expect(filterEven([1, 3, 5, 7])).toEqual([]);
    });

    test('returns empty array for empty input', () => {
      expect(filterEven([])).toEqual([]);
    });

    test('works with negative numbers', () => {
      expect(filterEven([-4, -3, -2, -1, 0, 1, 2])).toEqual([-4, -2, 0, 2]);
    });
  });

  describe('filterOdd', () => {
    test('filters odd numbers from array', () => {
      expect(filterOdd([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
    });

    test('returns empty array when no odd numbers', () => {
      expect(filterOdd([2, 4, 6, 8])).toEqual([]);
    });

    test('returns empty array for empty input', () => {
      expect(filterOdd([])).toEqual([]);
    });

    test('works with negative numbers', () => {
      expect(filterOdd([-4, -3, -2, -1, 0, 1, 2])).toEqual([-3, -1, 1]);
    });
  });

  describe('factorial', () => {
    test('calculates factorial of positive numbers', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(6)).toBe(720);
    });

    test('throws error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
      expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers');
    });
  });

  describe('isPrime', () => {
    test('returns false for numbers less than or equal to 1', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });

    test('returns true for prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(19)).toBe(true);
      expect(isPrime(23)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });

    test('returns false for composite numbers', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(10)).toBe(false);
      expect(isPrime(15)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });
  });
});
