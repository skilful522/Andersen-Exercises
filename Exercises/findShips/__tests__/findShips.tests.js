import findShips from '../findShips';

describe('findShips', function() {
    it('should return quantity of ships', function() {
        expect(findShips([0, 1, 2, 3, 4, 5, 25, 1, 0, 0, 1])).toBe(3);
    });
});
