import curriyngSum from '../curriyngSum';

describe('sum', function() {
    it('should return correct sum', function() {
        expect(curriyngSum(1)(2)(3)(4)(5)).toBe(15);
    });
});
