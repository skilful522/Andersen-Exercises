export default function findAnagramsInArray(words) {
    const cache = {};

    words.forEach((word) => {
        const key = word
            .toLowerCase()
            .split('')
            .sort()
            .join('');

        if (cache[key]) {
            cache[key].push(word);
        } else {
            cache[key] = [word];
        }
    });
    return Object.values(cache);
}
