import { countCharacters } from './count-characters.js';

describe('countCharacters', () => {
    it('should return an object with counts of each character', () => {
        const result = countCharacters('hi');
        expect(result).toEqual({ h: 1, i: 1 });
    });

    it('should count repeated characters correctly', () => {
        const result = countCharacters('hiiii');
        expect(result).toEqual({ h: 1, i: 4 });
    });

    it('should handle an empty string', () => {
        const result = countCharacters('');
        expect(result).toEqual({});
    });

    it('should count characters for a string with no spaces', () => {
        const result = countCharacters('abcdef');
        expect(result).toEqual({ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1 });
    });

    it('should handle strings with spaces', () => {
        const result = countCharacters('hello world');
        expect(result).toEqual({
            h: 1,
            e: 1,
            l: 3,
            o: 2,
            ' ': 1,
            w: 1,
            r: 1,
            d: 1,
        });
    });

    it('should handle non-alphabet characters', () => {
        const result = countCharacters('12345');
        expect(result).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
    });

    it('should count special characters correctly', () => {
        const result = countCharacters('!@#$%^&*()');
        expect(result).toEqual({
            '!': 1,
            '@': 1,
            '#': 1,
            $: 1,
            '%': 1,
            '^': 1,
            '&': 1,
            '*': 1,
            '(': 1,
            ')': 1,
        });
    });

    it('should count characters in a large string', () => {
        const result = countCharacters('a'.repeat(1000) + 'b'.repeat(1000));
        expect(result).toEqual({ a: 1000, b: 1000 });
    });
});
