const rotate = function (nums, k) {
  k = k % nums.length; // Handles cases where k > nums.length
  nums.splice(0, 0, ...nums.splice(nums.length - k, k));

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
