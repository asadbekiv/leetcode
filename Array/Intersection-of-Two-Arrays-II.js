var intersect = function (nums1, nums2) {
  let allNumber = new Array();
  let intersectNumbers = new Array();
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  for (let numbers1 of nums1) {
    allNumber.push(numbers1S);
  }
  console.log(allNumber);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
