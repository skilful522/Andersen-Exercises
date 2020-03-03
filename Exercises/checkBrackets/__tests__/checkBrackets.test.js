import checkBrackets from '../checkBrackets';

describe('checkBrackets', function() {
    it('should return true', function() {
        expect(checkBrackets('([{}])()')).toBeTruthy();
        expect(
            checkBrackets('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]')
        ).toBeTruthy();
    });
    it('should return false', function() {
        expect(checkBrackets('((()))))))')).toBeFalsy();
    });
    it('should return false', function() {
        expect(checkBrackets('{{{{))))')).toBeFalsy();
    });
});
