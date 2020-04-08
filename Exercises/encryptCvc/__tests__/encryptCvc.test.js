import encryptCvc from '../encryptCvc';

describe('encryptCvc', function() {
    it('should return correct number', function() {
        expect(encryptCvc('327', '286')).toBe('141');
    });
});
