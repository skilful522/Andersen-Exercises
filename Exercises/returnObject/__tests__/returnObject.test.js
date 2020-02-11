import returnObject from '../returnObject';

describe('returnObject', function() {
    it('should be object', function() {
        expect(returnObject('a.b.c.d')).toStrictEqual({ a: { b: { c: { d: null } } } });
    });
});
