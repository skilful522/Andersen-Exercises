export default function validNumberCard(numberCard) {
    const reverseNumbers = numberCard
        .toString()
        .split('')
        .reverse();

    const sum = reverseNumbers
        .map((value, index) => {
            const digitPosition = index + 1;

            value = parseInt(value, 10);

            if (digitPosition % 2 === 0) {
                const result = value * 2;

                return result > 9 ? result - 9 : result;
            }
            return value;
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    return sum % 10 === 0;
}
