const longestSubarray = function (nums) {
  let right = 0;
  let left = 0;
  let countOfZero = 0;
  let maxLen = 0;
  while (right < nums.length) {
    if (nums[right] == 0) {
      countOfZero++;
    }

    while (countOfZero > 1) {
      if (nums[left] == 0) {
        countOfZero--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left);
    right++;
  }

  return maxLen;
};


nums=[0,0,1,1]