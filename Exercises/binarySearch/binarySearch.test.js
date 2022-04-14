import { binarySearch } from './binarySearch';

describe('binarySearch', function() {
    it('should return index 3', function () {
        expect(binarySearch([1, 3, 6, 13, 17], 13)).toBe(3);
    });
    it('should return -1', function () {
        expect(binarySearch([1, 3, 6, 13, 17], 12)).toBe(-1);
    });
});
