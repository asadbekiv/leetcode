const findDifference = function (nums1, nums2) {
  const S1 = new Set(nums1);
  const S2 = new Set(nums2);
  nums1.forEach((num) => S2.delete(num));
  nums2.forEach((num) => S1.delete(num));
  return [Array.from(S1), Array.from(S2)];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
