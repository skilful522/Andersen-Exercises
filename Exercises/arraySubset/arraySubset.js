export const arraySubset = (source, subset) => {
    const sourceMap = {};
    const subsetMap = {};

    source.forEach((element) => {
        if (sourceMap[element]) {
            sourceMap[element] += 1;
        } else {
            sourceMap[element] = 1;
        }
    });

    subset.forEach((element) => {
        if (subsetMap[element]) {
            subsetMap[element] += 1;
        } else {
            subsetMap[element] = 1;
        }
    });

    return Object.keys(subsetMap).every((subsetKey) => sourceMap[subsetKey] >= subsetMap[subsetKey]);
};
