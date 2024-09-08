const findMaxAverage = function (nums, k) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let max = maxSum;

  for (let i = k; i < nums.length; i++) {
    maxSum = maxSum + nums[i] - nums[i - k];
    max = Math.max(max, maxSum);
  }

  return max / k;
};
