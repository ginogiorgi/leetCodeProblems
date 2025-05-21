function setZeroes(matrix) {
    xClean = [];
    yClean = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && xClean.indexOf(i) === -1) {
                xClean.push(i);
            }
            if (matrix[i][j] === 0 && yClean.indexOf(j) === -1) {
                yClean.push(j);
            }
        }
    }
    for (let i = 0; i < xClean.length; i++) {
        for (let j = 0; j < matrix[xClean[i]].length; j++) {
            matrix[xClean[i]][j] = 0;
        }
    }
    for (let i = 0; i < yClean.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][yClean[i]] = 0;
        }
    }
    return matrix;
}

setZeroes([
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
]);
