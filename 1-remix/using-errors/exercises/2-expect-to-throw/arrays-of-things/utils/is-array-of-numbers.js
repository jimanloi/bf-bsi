// #todo

/**
 * Check if an array contains only valid numbers
 *
 * @param {array} [array = []] - an array of items
 * @returns {boolean} true or false
 */

export const isArrayOfNumbers = (array = []) => {
    if (!Array.isArray(array)) {
        return false;
    }

    return array.every(
        (item) => typeof item === 'number' && !Number.isNaN(item),
    );
};
