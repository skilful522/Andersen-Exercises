import duplicator from '../duplicator';

describe('duplicator', function() {
    test('should return duplicate array', function() {
        const arr = [1, 2, 3];

        expect(arr.duplicator()).toEqual([1, 2, 3, 1, 2, 3]);
    });
});
