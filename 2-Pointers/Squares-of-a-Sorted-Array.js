const sortedSquares = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(Math.pow(nums[i], 2));
  }

  ans.sort((a, b) => a - b);
  return ans;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-4, -1, 0, 3, 10]));

// 1 square it each number in array
// 2 sort it non-decreasing order
