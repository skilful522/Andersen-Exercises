import checkPangram from '../checkPangram';

describe('checkPangram', function() {
    it('should return true', function() {
        expect(checkPangram('The quick brown fox jumps over the lazy dog.')).toBeTruthy();
    });
    it('should return false', function() {
        expect(checkPangram('This is not a pangram.')).toBeFalsy();
    });
});
