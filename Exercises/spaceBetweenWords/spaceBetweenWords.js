export default function spaceBetweenWords(str) {
    const words = str.split(' ');

    return words.map((word) => word.split('').join(' ')).join('  ');
}
