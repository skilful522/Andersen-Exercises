import { arraySubset } from './arraySubset';

describe('arraySubset', function() {
    it('should return true', function() {
        expect(arraySubset([2, 1, 3], [1, 2, 3])).toBeTruthy();
        expect(arraySubset([2, 1, 1, 3], [1, 2, 3])).toBeTruthy();
    });
    it('should return false', function() {
        expect(arraySubset([1, 1, 1, 3], [1, 3, 3])).toBeFalsy();
        expect(arraySubset([1, 2], [1, 2, 3])).toBeFalsy();
    });
});
