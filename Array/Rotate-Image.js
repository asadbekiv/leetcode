const rotate = function (matrix) {
  // Transpose

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //   Reverse elements and move inwards

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];      
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }

  return matrix;
};

// Given n*n matrix rotate it 90 dagre (clockwise direction)

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //[[7,4,1],[8,5,2],[9,6,3]]
