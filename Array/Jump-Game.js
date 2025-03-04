const canJump = function (nums) {
  let len = nums.length;
  let maxReach = 0;

  for (let i = 0; i < len; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= len - 1) {
      return true;
    }
  }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4])); //true
console.log(canJump([3, 2, 1, 0, 4])); //false
