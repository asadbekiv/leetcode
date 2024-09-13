const containsNearbyDuplicate = function (nums, k) {
  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in indexMap && Math.abs(i - indexMap[num]) <= k) {
      return true;
    }
    indexMap[num] = i;
  }

  return false;
};
