const singleNumber = function (nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
