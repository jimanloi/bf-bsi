// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 * returns the greatest number in an array of numbers'
 *
 * @param {array} [numbers=[]] - an array of numbers
 * @return {number} - the greatest number in the array
 */

export const findGreatestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('Input must be an array of valid numbers.');
    }

    if (numbers.length === 0) {
        return undefined;
    }

    return Math.max(...numbers);
};
