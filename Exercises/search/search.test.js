import { search } from './search';

describe('search', function() {
    it('should return index 3', function () {
        expect(search([1, 3, 6, 13, 17], 13)).toBe(3);
    });
    it('should return -1', function () {
        expect(search([1, 3, 6, 13, 17], 12)).toBe(-1);
    });
});
