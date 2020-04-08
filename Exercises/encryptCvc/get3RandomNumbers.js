const get3RandomNumbers = () =>
    Math.random()
        .toPrecision(4)
        .slice(-3);

export default get3RandomNumbers;
