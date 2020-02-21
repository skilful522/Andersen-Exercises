import decodeMorse from '../decodeMorse';

describe('decodeMorse', function() {
    it('should return correct string', function() {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
    });
    it('should return empty string', function() {
        expect(decodeMorse('')).toBe('');
    });
    it('should return correct string', function() {
        const str =
            '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ';

        expect(decodeMorse(str)).toBe('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
    });
});
