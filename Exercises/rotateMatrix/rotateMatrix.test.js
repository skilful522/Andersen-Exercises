import { rotateMatrix } from './rotateMatrix';

describe('rotateMatrix', function() {
    it('should rotate to 90 degrees', function() {
        expect(
            rotateMatrix(
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                ],
                90
            )
        ).toStrictEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ]);
    });
    it('should rotate to 180 degrees', function() {
        expect(
            rotateMatrix(
                rotateMatrix(
                    [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                    ],
                    180
                )
            )
        ).toStrictEqual([
            [9, 8, 7],
            [6, 5, 4],
            [3, 2, 1],
        ]);
    });
    it('should rotate to 270 degrees', function() {
        expect(
            rotateMatrix(
                rotateMatrix(
                    rotateMatrix(
                        [
                            [1, 2, 3],
                            [4, 5, 6],
                            [7, 8, 9],
                        ],
                        270
                    )
                )
            )
        ).toStrictEqual([
            [3, 6, 9],
            [2, 5, 8],
            [1, 4, 7],
        ]);
    });
});
