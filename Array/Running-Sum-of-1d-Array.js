function runningSum(nums) {
  for (let i = 1; i < nums.lengthl; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }

  return nums;
}
