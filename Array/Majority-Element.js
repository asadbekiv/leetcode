const majorityElement = function (nums) {
  let count = 0;
  let majourNumber = 0;
  let len = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (!count) {
      majourNumber = nums[i];
      count += 1;
    } else {
      count += nums[i] === majourNumber ? 1 : -1;
    }
  }

  return majourNumber;

  //   Time Complexity: O(n);
  // Space Complexity: O(1)
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
