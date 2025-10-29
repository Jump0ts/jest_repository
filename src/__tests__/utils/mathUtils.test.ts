import { sum, average } from '../../utils/mathUtils';

describe('Math Utils', () => {
  describe('sum function', () => {
    test('should return 0 for empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('should return the number itself for single element array', () => {
      expect(sum([5])).toBe(5);
    });

    test('should calculate sum correctly for multiple numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should handle negative numbers', () => {
      expect(sum([-1, -2, -3])).toBe(-6);
    });

    test('should handle mix of positive and negative numbers', () => {
      expect(sum([1, -2, 3, -4, 5])).toBe(3);
    });
  });

  describe('average function', () => {
    test('should return 0 for empty array', () => {
      expect(average([])).toBe(0);
    });

    test('should return the number itself for single element array', () => {
      expect(average([10])).toBe(10);
    });

    test('should calculate average correctly', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    test('should handle decimal results', () => {
      expect(average([1, 2, 4])).toBeCloseTo(2.33, 2);
    });

    test('should handle negative numbers', () => {
      expect(average([-1, -2, -3])).toBe(-2);
    });
  });
});