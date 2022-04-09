import { removeDupes } from '../removeDupes';

describe('removeDupes', function() {
    it('should return unique values', function() {
        expect(removeDupes('abcd')).toBe('abcd');
        expect(removeDupes('aabbccdd')).toBe('abcd');
        expect(removeDupes('abcddbca')).toBe('abcd');
        expect(removeDupes('abababcdcdcd')).toBe('abcd');
    });
});
