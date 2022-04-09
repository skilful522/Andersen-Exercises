export const isStringRotated = (source, testString) => {
    return source.length === testString.length ? testString.split('').every((char) => source.includes(char)) : false;
};
