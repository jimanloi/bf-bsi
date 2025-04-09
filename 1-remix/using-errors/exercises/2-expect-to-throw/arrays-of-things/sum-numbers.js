// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *sums all the numbers in an array of numbers

 * @param {array} [numbers=[]] - an array of numbers
 * @return {number} the sum of all numbers
 */

export const sumNumbers = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('The array is not an array of numbers');
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
