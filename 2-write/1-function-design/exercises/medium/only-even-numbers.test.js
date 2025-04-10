// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

const mySolution = (number = []) => {
    if (
        !Array.isArray(number) ||
        number.some((item) => typeof item !== 'number' || Number.isNaN(item))
    ) {
        throw new TypeError('Expected an array of number without NaN');
    }
    return number.filter((item) => item % 2 === 0);
};

for (const solution of [secretSolution, mySolution]) {
    describe(
        solution.name + ': removes all odd numbers from an array of numbers',
        () => {
            describe('correctly filters the array of numbers', () => {
                it('returns an empty array when the input is empty', () => {
                    expect(solution([])).toEqual([]);
                });

                it('returns the same array if it contains only even numbers', () => {
                    expect(solution([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
                });

                it('removes all odd numbers from an array containing both odd and even', () => {
                    expect(solution([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
                });

                it('returns an empty array if the array only contains odd numbers', () => {
                    expect(solution([1, 3, 5, 7, 9])).toEqual([]);
                });
            });

            describe('handles invalid inputs', () => {
                it('throws an error if the argument is not an array', () => {
                    expect(() => solution('not an array')).toThrow(TypeError);
                });

                it('throws an error if the array contains non-number elements', () => {
                    expect(() => solution([1, 2, '3', 4])).toThrow(TypeError);
                });
            });

            describe('does not modify the argument', () => {
                it('does not mutate the original array', () => {
                    const originalArray = [1, 2, 3, 4];
                    solution(originalArray);
                    expect(originalArray).toEqual([1, 2, 3, 4]); // should remain the same
                });
            });
        },
    );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
