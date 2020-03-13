export default function decodeMorse(morseCode) {
    const engAlphabet = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
    };

    const serviceCodes = {
        '...---...': 'SOS',
    };

    const punctuationMarks = {
        '-.-.--': '!',
        '.-.-.-': '.',
    };

    const numbers = {
        '.----': 1,
        '..---': 2,
        '...--': 3,
        '....-': 4,
        '.....': 5,
        '-....': 6,
        '--...': 7,
        '---..': 8,
        '----.': 9,
        '-----': 0,
    };

    return morseCode
        .split('   ')
        .map((word) => {
            return word
                .trim()
                .split(' ')
                .map((char) => {
                    if (engAlphabet[char]) {
                        return engAlphabet[char];
                    }
                    if (numbers[char]) {
                        return numbers[char];
                    }
                    if (serviceCodes[char]) {
                        return serviceCodes[char];
                    }
                    if (punctuationMarks[char]) {
                        return punctuationMarks[char];
                    }
                    return char;
                })
                .join('')
                .trim();
        })
        .join(' ')
        .trim();
}
