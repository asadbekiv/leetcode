var intersect = function (nums1, nums2) {
  let allNumber = [];

  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      allNumber.push(nums2[i]);
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    }
  }

  return allNumber;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
