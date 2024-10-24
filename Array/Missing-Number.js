var missingNumber = function (nums) {
  let len = nums.length;
  if (len === 0) return 0;

  result = 0;

  for (let i = 0; i < len; i++) {
    result += nums[i] - i;
    console.log("Result", result);
  }


  return len - result;
};
console.log(missingNumber([3, 0, 1]));
