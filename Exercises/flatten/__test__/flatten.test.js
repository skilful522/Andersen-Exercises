import { flatten } from '../flatten';

describe('flatten', function() {
    it('should return true', function() {
        expect(flatten([[1], [[2, 3]], [[[4]]]])).toStrictEqual([1, 2, 3, 4]);
    });
});
