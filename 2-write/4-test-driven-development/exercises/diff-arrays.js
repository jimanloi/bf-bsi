/**
 * Returns an array containing only the items that are not in both a and b.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [a=[]] - One of the two arrays.
 * @param {number[]} [b=[]] - The other array.
 * @returns {number[]} A new array with items not in both a and b.
 *
 */

export const diffArrays = (a = [], b = []) => {
    const newArray = [];

    const includesWithNaN = (arr, val) => arr.some((el) => Object.is(el, val));

    for (const item of a) {
        if (!includesWithNaN(b, item)) {
            newArray.push(item);
        }
    }

    for (const item of b) {
        if (!includesWithNaN(a, item)) {
            newArray.push(item);
        }
    }

    return newArray;
};
