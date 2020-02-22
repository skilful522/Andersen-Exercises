import encryptToMorse from '../encryptToMorse';

describe('encryptToMorse', function() {
    it('should return correct string', function() {
        expect(encryptToMorse('HELLO WORLD')).toBe('.... . .-.. .-.. ---   .-- --- .-. .-.. -..');
    });
    it('should return empty string', function() {
        expect(encryptToMorse('')).toBe('');
    });
});
