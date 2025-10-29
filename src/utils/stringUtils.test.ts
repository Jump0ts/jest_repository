import {
  capitalize,
  reverseString,
  isPalindrome,
  wordCount,
  truncate,
  toTitleCase,
  removeWhitespace,
  countOccurrences,
  isNumeric,
  camelToKebab,
} from './stringUtils';

describe('stringUtils', () => {
  describe('capitalize', () => {
    test('capitalizes first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    test('handles already capitalized strings', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('lowercases other letters', () => {
      expect(capitalize('hELLO')).toBe('Hello');
    });
  });

  describe('reverseString', () => {
    test('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('world')).toBe('dlrow');
    });

    test('handles empty string', () => {
      expect(reverseString('')).toBe('');
    });

    test('handles single character', () => {
      expect(reverseString('a')).toBe('a');
    });

    test('handles palindromes', () => {
      expect(reverseString('racecar')).toBe('racecar');
    });
  });

  describe('isPalindrome', () => {
    test('returns true for palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('Was it a car or a cat I saw')).toBe(true);
    });

    test('returns false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
    });

    test('handles empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    test('handles single character', () => {
      expect(isPalindrome('a')).toBe(true);
    });

    test('ignores case', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });
  });

  describe('wordCount', () => {
    test('counts words in a sentence', () => {
      expect(wordCount('Hello world')).toBe(2);
      expect(wordCount('The quick brown fox')).toBe(4);
    });

    test('handles multiple spaces', () => {
      expect(wordCount('Hello   world')).toBe(2);
    });

    test('handles empty string', () => {
      expect(wordCount('')).toBe(0);
      expect(wordCount('   ')).toBe(0);
    });

    test('handles single word', () => {
      expect(wordCount('hello')).toBe(1);
    });
  });

  describe('truncate', () => {
    test('truncates long strings', () => {
      expect(truncate('This is a very long string', 10)).toBe('This is...');
    });

    test('does not truncate short strings', () => {
      expect(truncate('Short', 10)).toBe('Short');
    });

    test('handles exact length', () => {
      expect(truncate('Exactly', 7)).toBe('Exactly');
    });

    test('handles empty string', () => {
      expect(truncate('', 5)).toBe('');
    });
  });

  describe('toTitleCase', () => {
    test('converts to title case', () => {
      expect(toTitleCase('hello world')).toBe('Hello World');
      expect(toTitleCase('the quick brown fox')).toBe('The Quick Brown Fox');
    });

    test('handles already title cased strings', () => {
      expect(toTitleCase('Hello World')).toBe('Hello World');
    });

    test('handles all caps', () => {
      expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
    });

    test('handles single word', () => {
      expect(toTitleCase('hello')).toBe('Hello');
    });
  });

  describe('removeWhitespace', () => {
    test('removes all whitespace', () => {
      expect(removeWhitespace('hello world')).toBe('helloworld');
      expect(removeWhitespace('a b c d')).toBe('abcd');
    });

    test('handles multiple spaces', () => {
      expect(removeWhitespace('hello   world')).toBe('helloworld');
    });

    test('handles tabs and newlines', () => {
      expect(removeWhitespace('hello\tworld\n')).toBe('helloworld');
    });

    test('handles empty string', () => {
      expect(removeWhitespace('')).toBe('');
    });

    test('handles string with no whitespace', () => {
      expect(removeWhitespace('helloworld')).toBe('helloworld');
    });
  });

  describe('countOccurrences', () => {
    test('counts substring occurrences', () => {
      expect(countOccurrences('hello world', 'o')).toBe(2);
      expect(countOccurrences('banana', 'na')).toBe(2);
    });

    test('handles no occurrences', () => {
      expect(countOccurrences('hello', 'x')).toBe(0);
    });

    test('handles empty substring', () => {
      expect(countOccurrences('hello', '')).toBe(0);
    });

    test('handles empty string', () => {
      expect(countOccurrences('', 'a')).toBe(0);
    });

    test('counts non-overlapping occurrences', () => {
      expect(countOccurrences('aaa', 'aa')).toBe(1);
      expect(countOccurrences('aaaa', 'aa')).toBe(2);
    });
  });

  describe('isNumeric', () => {
    test('returns true for numeric strings', () => {
      expect(isNumeric('123')).toBe(true);
      expect(isNumeric('0')).toBe(true);
      expect(isNumeric('999')).toBe(true);
    });

    test('returns false for non-numeric strings', () => {
      expect(isNumeric('abc')).toBe(false);
      expect(isNumeric('12a')).toBe(false);
      expect(isNumeric('1.23')).toBe(false);
      expect(isNumeric('12 34')).toBe(false);
    });

    test('returns false for empty string', () => {
      expect(isNumeric('')).toBe(false);
    });
  });

  describe('camelToKebab', () => {
    test('converts camelCase to kebab-case', () => {
      expect(camelToKebab('helloWorld')).toBe('hello-world');
      expect(camelToKebab('myVariableName')).toBe('my-variable-name');
    });

    test('handles single word', () => {
      expect(camelToKebab('hello')).toBe('hello');
    });

    test('handles already kebab-case', () => {
      expect(camelToKebab('hello-world')).toBe('hello-world');
    });

    test('handles consecutive capitals', () => {
      expect(camelToKebab('XMLHttpRequest')).toBe('xmlhttp-request');
      expect(camelToKebab('HTTPSConnection')).toBe('httpsconnection');
    });
  });
});
