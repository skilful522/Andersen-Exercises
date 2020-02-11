export default function findAnagram(word, word2) {
    const str1 = word
        .toLowerCase()
        .split('')
        .sort()
        .join('');
    const str2 = word2
        .toLowerCase()
        .split('')
        .sort()
        .join('');

    return str1 === str2;
}
