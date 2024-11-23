function flippingMatrix(matrix) {
    // Write your code here
    let matrixHalfSize = matrix.length / 2;
    let matrixArray = [];
    let sum = 0;

    for (let i = 0; i < matrixHalfSize; i++) {
        for (let j = 0; j < matrixHalfSize; j++) {
            matrixArray.push(
                [
                    matrix[i][j],
                    matrix[i][matrixHalfSize + j],
                    matrix[matrixHalfSize + i][j],
                    matrix[matrixHalfSize + i][matrixHalfSize + j]
                ]
            )
        }
    }
    
    matrixArray.forEach(item => {
        item.sort((a, b) => a - b);
    })

    matrixArray.forEach(item => {
        sum += item[0];
    })

    return sum;
}