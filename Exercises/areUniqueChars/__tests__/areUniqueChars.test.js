import { areUniqueChars } from '../areUniqueChars';

describe('areUniqueChars', function() {
    it('should return true', function() {
        expect(areUniqueChars('abcdef')).toBeTruthy();
        expect(areUniqueChars('1234567')).toBeTruthy();
        expect(areUniqueChars('abcABC')).toBeTruthy();
    });
    it('should return false', function() {
        expect(areUniqueChars('abcadef')).toBeFalsy();
    });
});
