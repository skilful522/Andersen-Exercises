import toList from '../toList';

describe('toList', function() {
    it('should return linked list', function() {
        expect(toList([1, 2, 3])).toStrictEqual({
            next: { next: { next: null, value: 3 }, value: 2 },
            value: 1,
        });
    });
});
