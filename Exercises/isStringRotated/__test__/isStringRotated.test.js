import { isStringRotated } from '../isStringRotated';

describe('isStringRotated', function() {
    it('should return true', function() {
        expect(isStringRotated('javascript', 'scriptjava')).toBeTruthy();
        expect(isStringRotated('javascript', 'iptjavascr')).toBeTruthy();
    });
    it('should return false', function () {
        expect(isStringRotated('javascript', 'java')).toBeFalsy();
    });
});
