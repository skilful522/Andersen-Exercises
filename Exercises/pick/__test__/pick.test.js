import pick from '../pick';

describe('pick', function() {
    it('should return partial object', function() {
        expect(pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 })).toStrictEqual({ a: 1, d: 4 });
    });
    it('should return partial object without nonexistent prop', function() {
        expect(pick(['a', 'd', 'someProp'], { a: 1, b: 2, c: 3, d: 4 })).toStrictEqual({ a: 1, d: 4 });
    });
});
