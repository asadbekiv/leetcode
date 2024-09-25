const findClosestNumber = function (nums) {
  let len = nums.length;
  let ans = nums[0];
  for (let i = 1; i < len; i++) {
    if (
      Math.abs(nums[i]) < Math.abs(ans) ||
      (Math.abs(nums[i]) == Math.abs(ans) && nums[i] > 0)
    )
      ans = nums[i];
  }

  return ans;
};

// Problems states that I should return the number,which is closest to 0.
// One thing do not forget If there are two closest numbers return largets value

// Need to find distance given number to 0.For example from -4 to 0 is |-4-0|=4

// nums=[-4,-2,1,4,8] each values in array should be found distance between 0 and nums[i]

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
console.log(findClosestNumber([-100000, -100000]));
