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
} from "../../utils/stringUtils";

describe("stringUtils", () => {
	test("capitalizes the first letter of a string", () => {
		const input = "hello";
		const output = capitalize(input);
		expect(output).toBe("Hello");
	});

	test("reverses a string", () => {
		const input = "hello";
		const output = reverseString(input);
		expect(output).toBe("olleh");
	});

	test("checks if a string is a palindrome", () => {
		const input = "racecar";
		const output = isPalindrome(input);
		expect(output).toBe(true);
	});

	test("counts the number of words in a string", () => {
		const input = "hello world";
		const output = wordCount(input);
		expect(output).toBe(2);
	});

	test("truncates a string to a specified length", () => {
		const input = "hello world";
		const output = truncate(input, 5);
		expect(output).toBe("hello...");
	});

	test("converts a string to title case", () => {
		const input = "hello world";
		const output = toTitleCase(input);
		expect(output).toBe("Hello World");
	});

	test("removes all whitespace from a string", () => {
		const input = "  hello   world  ";
		const output = removeWhitespace(input);
		expect(output).toBe("helloworld");
	});

	test("counts the occurrences of a substring in a string", () => {
		const input = "hello world";
		const output = countOccurrences(input, "o");
		expect(output).toBe(2);
	});

	test("checks if a string is numeric", () => {
		const input = "12345";
		const output = isNumeric(input);
		expect(output).toBe(true);
	});

	test("converts camelCase to kebab-case", () => {
		const input = "camelCaseString";
		const output = camelToKebab(input);
		expect(output).toBe("camel-case-string");
	});
});
