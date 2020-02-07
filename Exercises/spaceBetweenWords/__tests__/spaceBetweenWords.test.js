import spaceBetweenWords from '../spaceBetweenWords';

describe('spaceBetweenWords', function() {
    it('should spaces between symbols after calling function', function() {
        expect(spaceBetweenWords('hello world')).toBe('h e l l o  w o r l d');
    });
});
