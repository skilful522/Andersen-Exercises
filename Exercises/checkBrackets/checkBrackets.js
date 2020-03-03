export default function checkBrackets(str) {
    const dictionary = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    const openedBrackets = ['{', '[', '('];
    const closedBrackets = ['}', ']', ')'];
    const stack = [];

    for (let i = 0; i < str.split('').length; i++) {
        const char = str[i];

        if (openedBrackets.includes(char)) {
            stack.push(char);
        } else if (closedBrackets.includes(char)) {
            const last = stack.pop();

            if (char !== dictionary[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
