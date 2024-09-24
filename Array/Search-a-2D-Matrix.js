const searchMatrix = function (matrix, target) {
  let newA = [];
  for (let i = 0; i < matrix.length; i++) {
    newA = newA.concat(matrix[i]);
  }
  for (let j = 0; j < newA.length; j++) {
    if (target === newA[j]) {
      return true;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
