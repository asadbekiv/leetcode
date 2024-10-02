const spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let ans = [];
  let i = 0;
  let j = 0;
  let Up = 0;
  let Right = 1;
  let Down = 2;
  let Left = 3;
  let direction = Right;

  let upWall = 0;
  let rightWall = n;
  let downWall = m;
  let leftWall = -1;

  while (ans.length !== m*n) {
    if ((direction === Right)) {
      while (j < rightWall) {
        ans.push(matrix[i][j]);
        j += 1;
      }
      i = i + 1;
      j = j - 1;
      rightWall -= 1;
      direction = Down;
    } else if (direction === Down) {
      while (i < downWall) {
        ans.push(matrix[i][j]);
        i += 1;
      }
      i = i - 1;
      j = j - 1;
      downWall -= 1;
      direction = Left;
    } else if ((direction === Left)) {
      while (j > leftWall) {
        ans.push(matrix[i][j]);
        j -= 1;
      }
      i = i - 1;
      j = j + 1;
      leftWall += 1;
      direction = Up;
    } else {
      while (i > upWall) {
        ans.push(matrix[i][j]);
        i -= 1;
      }
      i = i + 1;
      j = j + 1;
      upWall += 1;
      direction = Right;
    }
  }

  return ans;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
