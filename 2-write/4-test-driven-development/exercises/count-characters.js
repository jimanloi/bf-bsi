/**
 * Counts how many times each character appears in a string.
 *
 * @param {string} [text=''] - The string of characters to count.
 * @returns {number{}} An object of key/value pairs counting each character.
 *
 * @example
 *
 * countCharacters('hi'); // { h: 1, i: 1 }
 *
 * @example
 *
 * countCharacters('hiiii'); // { h: 1, i: 4 }
 *
 */

export const countCharacters = (text = '') => {
    const countObject = {};
    if (text === '') return countObject;

    for (const char of text) {
        if (countObject[char]) {
            countObject[char] += 1;
        } else {
            countObject[char] = 1;
        }
    }
    return countObject;
};
