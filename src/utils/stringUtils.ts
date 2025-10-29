/**
 * Utility functions for string operations
 */

/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Reverses a string
 */
export const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};

/**
 * Checks if a string is a palindrome
 */
export const isPalindrome = (str: string): boolean => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverseString(cleaned);
};

/**
 * Counts the number of words in a string
 */
export const wordCount = (str: string): number => {
  const trimmed = str.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
};

/**
 * Truncates a string to a specified length and adds ellipsis
 */
export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
};

/**
 * Converts a string to title case
 */
export const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Removes all whitespace from a string
 */
export const removeWhitespace = (str: string): string => {
  return str.replace(/\s+/g, '');
};

/**
 * Counts the occurrences of a substring in a string
 */
export const countOccurrences = (str: string, substring: string): number => {
  if (!substring) return 0;
  let count = 0;
  let position = 0;
  
  while ((position = str.indexOf(substring, position)) !== -1) {
    count++;
    position += substring.length;
  }
  
  return count;
};

/**
 * Checks if a string contains only digits
 */
export const isNumeric = (str: string): boolean => {
  return /^\d+$/.test(str);
};

/**
 * Converts a camelCase string to kebab-case
 */
export const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
