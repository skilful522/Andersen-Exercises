export default function findEqual(arr1, arr2) {
    const cache = {};

    arr1.forEach((element) => {
        cache[element] = element;
    });

    arr2.forEach((element) => {
        if (cache[element] === element) {
            cache[element] = true;
        }
    });

    return Object.keys(cache)
        .filter((key) => cache[key] === true)
        .map((key) => Number(key));
}
