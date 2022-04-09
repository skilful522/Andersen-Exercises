export const removeDupes = (string) => {
    let result = '';

    string.split('').forEach((char) => {
        if (!result.includes(char)) {
            result += char;
        }
    });

    return result;
};
