import { evenOrOdd } from './even-or-odd.js';

describe('evenOrOdd', () => {
    it('should return ["odd", "even"] for [1, 2]', () => {
        expect(evenOrOdd([1, 2])).toEqual(['odd', 'even']);
    });

    it('should return ["even", "even", "odd"] for [0, 4, 7]', () => {
        expect(evenOrOdd([0, 4, 7])).toEqual(['even', 'even', 'odd']);
    });

    it('should return [] for an empty array', () => {
        expect(evenOrOdd([])).toEqual([]);
    });

    it('should handle negative numbers correctly', () => {
        expect(evenOrOdd([-2, -3])).toEqual(['even', 'odd']);
    });

    it('should return ["even", "odd", "even", "odd"] for [10, 11, 100, 101]', () => {
        expect(evenOrOdd([10, 11, 100, 101])).toEqual([
            'even',
            'odd',
            'even',
            'odd',
        ]);
    });
});
