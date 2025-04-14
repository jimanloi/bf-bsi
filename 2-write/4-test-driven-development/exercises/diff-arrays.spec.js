import { diffArrays } from './diff-arrays.js';

describe('diffArrays', () => {
    // Test with no common elements between arrays.
    it('should return only the unique elements when there are no common elements', () => {
        const result = diffArrays([1, 2], [3, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    // Test with some common elements between arrays.
    it('should return the elements not common to both arrays', () => {
        const result = diffArrays([2, 1], [3, 2]);
        expect(result).toEqual([1, 3]);
    });

    // Test with arrays containing NaN values.
    it('should return the elements that are not in both arrays, including NaN', () => {
        const result = diffArrays([2, NaN], [3, 1]);
        expect(result).toEqual([2, NaN, 3, 1]);
    });

    // Test with arrays that are identical (should return an empty array).
    it('should return an empty array when both arrays are identical', () => {
        const result = diffArrays([1, 2, 3], [1, 2, 3]);
        expect(result).toEqual([]);
    });

    // Test with an empty array.
    it('should return the second array when the first array is empty', () => {
        const result = diffArrays([], [4, 5]);
        expect(result).toEqual([4, 5]);
    });
});
