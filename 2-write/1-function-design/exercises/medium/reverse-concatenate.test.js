// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

const mySolution = (arrayOfStrings = []) => {
    if (
        !Array.isArray(arrayOfStrings) ||
        arrayOfStrings.some((item) => typeof item !== 'string')
    ) {
        throw new TypeError('Expected an array of strings');
    }
    const combine = (a, b) => a + b;
    return arrayOfStrings.reverse().reduce(combine, '');
};

for (const solution of [secretSolution]) {
    describe(
        solution.name +
            ': take an array of strings, reverses it, and combines the strings',
        () => {
            // Test for General Case: Array of strings
            describe('General Case', () => {
                it('should reverse and concatenate the strings correctly', () => {
                    const result = solution(['a', 'b', 'c']);
                    expect(result).toBe('cba');
                });
            });

            // Test for Empty Array
            describe('Edge Case - Empty Array', () => {
                it('should return an empty string for an empty array', () => {
                    const result = solution([]);
                    expect(result).toBe('');
                });
            });

            // Test for Single Element
            describe('Edge Case - Single Element', () => {
                it('should return the string itself if there is only one element', () => {
                    const result = solution(['hello']);
                    expect(result).toBe('hello');
                });
            });

            // Test for Invalid Input - Not an Array
            describe('Invalid Input - Not an Array', () => {
                it('should throw an error if input is not an array', () => {
                    expect(() => solution('not an array')).toThrow(TypeError);
                });
            });

            // Test for Invalid Input - Array with Non-String Elements
            describe('Invalid Input - Non-String Elements', () => {
                it('should throw an error if the array contains non-string elements', () => {
                    expect(() => solution(['a', 2, 'c'])).toThrow(TypeError);
                });
            });
        },
    );
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
