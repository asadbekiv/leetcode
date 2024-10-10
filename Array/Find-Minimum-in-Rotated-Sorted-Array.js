var findMin = function (nums) {
  let n = nums.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    // console.log(m);

    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return nums[l];

  //   Time: O(log(n))
  //   Space: O(1)
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
