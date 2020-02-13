export default function pick(arr, obj) {
    const cache = {};

    arr.forEach((element) => {
        Object.keys(obj).forEach((key) => {
            if (element === key) {
                cache[key] = obj[key];
            }
        });
    });

    return cache;
}
