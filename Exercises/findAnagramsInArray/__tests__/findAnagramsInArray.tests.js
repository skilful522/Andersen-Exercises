import findAnagramsInArray from '../findAnagramsInArray';

describe('findAnagramsInArray', function() {
    it('should return correct array of arrays anagrams', function() {
        const input = [
            'вертикаль',
            'кильватер',
            'апельсин',
            'спаниель',
            'австралопитек',
            'ватерполистка',
            'кластер',
            'сталкер',
            'стрелка',
        ];

        const output = [
            ['вертикаль', 'кильватер'],
            ['апельсин', 'спаниель'],
            ['австралопитек', 'ватерполистка'],
            ['кластер', 'сталкер', 'стрелка'],
        ];

        expect(findAnagramsInArray(input)).toEqual(output);
    });
});
