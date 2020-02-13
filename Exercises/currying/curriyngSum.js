export default function curriyngSum(number) {
    let result = number;

    function getNextFunction(nextNumber) {
        result += nextNumber;
        return getNextFunction;
    }

    getNextFunction.toString = function() {
        return result;
    };

    return getNextFunction;
}
