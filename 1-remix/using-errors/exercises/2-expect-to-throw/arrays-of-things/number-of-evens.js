// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {array} [numbers=[]]
 * @return {number}
 */

export const numberOfEvens = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('It is not an array of numbers');
    }
    const arrOfEvenNums = numbers.filter((value) => value % 2 === 0);

    return arrOfEvenNums.length;
};
