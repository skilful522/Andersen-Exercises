import EventEmmiter from '../EventEmmiter';

describe('EventEmmiter', function() {
    it('should return correct callbacks values', function() {
        const eventEmmiter = new EventEmmiter();

        eventEmmiter.on('toString', () => 'hello');
        eventEmmiter.on('toString', () => 'goodbye');
        eventEmmiter.on('add', () => 2 + 2);
        expect(eventEmmiter.emit('toString')).toEqual(['hello', 'goodbye']);
        expect(eventEmmiter.emit('add')).toEqual([4]);
    });
});
