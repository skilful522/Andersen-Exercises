import findAnagram from '../findAnagram';

describe('findAnagrmas', function() {
    it('should return true after calling function', function() {
        expect(findAnagram('ниша', 'шина')).toBeTruthy();
    });
});
