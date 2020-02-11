import findEqual from '../findEqual';

describe('findEqual', function() {
    it('should return array of same elements from two arrays', function() {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4, 5];

        expect(findEqual(arr1, arr2)).toStrictEqual([2, 3]);
    });
});
