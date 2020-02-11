import fibonacci from '../fibonacci';

describe('fibonacci', function() {
    it('should return corrent number after calling function', function() {
        expect(fibonacci(10)).toBe(55);
    });
});
