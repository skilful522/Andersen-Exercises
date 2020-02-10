export default function findShips(field) {
    return field.filter((value) => value === 1).reduce((prev, curr) => prev + curr);
}
