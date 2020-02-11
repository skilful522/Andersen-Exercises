import createObject from '../createObject';

describe('createObject', function() {
    it('should return Object with Object prototype', function() {
        const newObject = createObject(Object.prototype);

        expect(Object.getPrototypeOf(newObject)).toBe(Object.prototype);
    });
    it('should be different link', function() {
        const someObject = { a: 42 };
        const newObject = createObject(someObject);

        expect(newObject === someObject).toBeFalsy();
    });
});
