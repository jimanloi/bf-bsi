import { matchingBraces } from './matching-braces.js';

describe('matchingBraces', () => {
    it('should return false for a single unmatched opening brace', () => {
        expect(matchingBraces('[')).toBe(false);
    });

    it('should return true for a simple matching pair of braces', () => {
        expect(matchingBraces('()')).toBe(true);
    });

    it('should return false for mismatched braces', () => {
        expect(matchingBraces('(]')).toBe(false);
    });

    it('should return true for nested matching braces', () => {
        expect(matchingBraces('{[]}')).toBe(true);
    });

    it('should return false for improperly nested braces', () => {
        expect(matchingBraces('([)]')).toBe(false);
    });

    it('should return true for multiple pairs of matching braces', () => {
        expect(matchingBraces('()[]{}')).toBe(true);
    });

    it('should return true for an empty string', () => {
        expect(matchingBraces('')).toBe(true);
    });

    it('should return false if closing brace comes before opening', () => {
        expect(matchingBraces(']')).toBe(false);
    });
});
