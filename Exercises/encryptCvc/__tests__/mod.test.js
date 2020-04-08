import mod from '../mod';

describe('mod', function() {
    it('should return correct number', function() {
        expect(mod.call(-6, 10)).toBe(4);
    });
});
