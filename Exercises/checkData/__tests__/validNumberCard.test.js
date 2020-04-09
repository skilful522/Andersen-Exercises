import validNumberCard from '../validNumberCard';

describe('validNumberCard', function() {
    it('should return true', function() {
        expect(validNumberCard(5432115194685353)).toBeTruthy();
    });
    it('should return true', function() {
        expect(validNumberCard(378282246310005)).toBeTruthy();
    });
    it('should return true', function() {
        expect(validNumberCard(6011111111111117)).toBeTruthy();
    });
    it('should return true', function() {
        expect(validNumberCard(4012888888881881)).toBeTruthy();
    });
});
