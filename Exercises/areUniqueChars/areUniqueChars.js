export const areUniqueChars = (text) => {
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (text.lastIndexOf(char) !== i) {
            return false;
        }
    }

    return true;
};
