/**
 * Checks if the braces in a string are matched.
 *
 * @param {string} [text=''] - The text of braces to check.
 * @returns {boolean} Whether or not the braces are matched.
 *
 * @example
 *
 * matchingBraces('['); // false
 *
 * @example
 *
 * matchingBraces('()'); // true
 *
 * @example
 *
 * matchingBraces('(]'); // false
 *
 * @example
 *
 * matchingBraces('{[]}'); // true
 *
 * @example
 *
 * matchingBraces('([)]'); // false
 *
 * @example
 *
 * matchingBraces('()[]{}'); // true
 *
 */
export const matchingBraces = (text = '') => {
    const openBraces = '([{';
    const closeBraces = ')]}';
    const stack = [];

    for (const char of text) {
        if (openBraces.includes(char)) {
            stack.push(char);
        } else if (closeBraces.includes(char)) {
            if (stack.length === 0) return false;

            const lastOpen = stack.pop();
            if (openBraces.indexOf(lastOpen) !== closeBraces.indexOf(char)) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
