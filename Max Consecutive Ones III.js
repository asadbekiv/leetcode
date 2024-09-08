const longestOnes = function (nums, k) {
  let res = 0;
  let numberOfZeros = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      numberOfZeros++;
    }

    while (numberOfZeros > k) {
      if (nums[left] === 0) {
        numberOfZeros--;
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
  }

  return res;
};

