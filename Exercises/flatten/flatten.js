export const flatten = (lists) => {
    const result = [];

    for (let i = 0; i < lists.length; i++) {
        const value = lists[i];

        if (Array.isArray(value)) {
            const oneDeepList = flatten(value);

            for (let j = 0; j < oneDeepList.length; j++) {
                result.push(oneDeepList[j]);
            }
        } else {
            result.push(value);
        }
    }

    return result;
};
