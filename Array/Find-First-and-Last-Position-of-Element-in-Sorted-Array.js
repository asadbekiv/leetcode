const searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let leftBound = -1;
  let rightBound = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) {
      if (mid === 0 || nums[mid - 1] !== target) {
        leftBound = mid;
        break;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        rightBound = mid;
        break;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [leftBound, rightBound];
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// Problem states that.Find staring and ending position of target an given array.if target is not in array return [-1,-1]
// example target=9 nums=[5,7,7,8,8,10] returned array [3.4]
