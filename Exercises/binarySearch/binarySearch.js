export const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    if (target < array[start] || target > array[end]) {
        return -1;
    }

    const middle = Math.floor(array.length / 2);

    while (true) {
        if (target === array[start]) {
            return start;
        }

        if (target === array[end]) {
            return end;
        }

        if (start - end === 1) {
            return -1;
        }
        if (target > array[start]) {
            start = middle + 1;
        } else if (target < array[end]) {
            end = middle - 1;
        } else {
            return -1;
        }
    }
};
