export const rotateMatrix = (matrix) => {
    const columns = matrix.map((row, index) => {
        return row.map((_, rowIndex) => matrix[rowIndex][index]);
    });

    return columns.map((column) => column.reverse());
}