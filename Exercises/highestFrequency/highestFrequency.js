export const highestFrequency = (list) => {
    const map = {};
    let maxFrequency = 0;
    let maxFrequencyString = list[0];

    list.forEach((element) => {
        if (map[element]) {
            map[element] += 1;
        } else {
            map[element] = 1;
        }
        if (map[element] > maxFrequency) {
            maxFrequency = map[element];
            maxFrequencyString = element;
        }
    });

    return maxFrequencyString;
};
