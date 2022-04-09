import { highestFrequency } from '../highestFrequency';

describe('highestFrequency', function() {
    it('should return the most frequent string', function() {
        expect(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])).toBe('c');
        expect(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])).toBe('abc');
        expect(highestFrequency(['abc', 'def'])).toBe('abc');
        expect(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])).toBe('ghi');
    });
});
