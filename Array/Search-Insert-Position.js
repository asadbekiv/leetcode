var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid-1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3], 2));
// console.log(Math.floor(7 / 2));

// there are given nums array and target value.
// Problem says return index of target.if there is not target in index where woulde be in nums array

// nums = [1,3,5,6]
// target=5
