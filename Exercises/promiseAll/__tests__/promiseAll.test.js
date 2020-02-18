import promiseAll from '../promiseAll';

describe('promiseAll', function() {
    it('should return correct result', function() {
        expect(
            promiseAll([
                new Promise((resolve) => setTimeout(() => resolve('third'), 3000)),
                new Promise((resolve) => setTimeout(() => resolve('first'), 500)),
                new Promise((resolve) => setTimeout(() => resolve('second'), 1500)),
            ])
        ).resolves.toEqual(['third', 'first', 'second']);
    });
    it('should return error', function() {
        expect(
            promiseAll([
                new Promise((resolve) => setTimeout(() => resolve('third'), 3000)),
                new Promise((resolve, reject) => setTimeout(() => reject('first'), 500)),
                new Promise((resolve) => setTimeout(() => resolve('second'), 1500)),
            ])
        ).rejects.toEqual('first');
    });
    it('should return result in correct order', function() {
        expect(
            promiseAll([
                new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
                new Promise((resolve) => setTimeout(() => resolve(2), 200)),
                new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
            ])
        ).resolves.toEqual([1, 2, 3]);
    });
});
