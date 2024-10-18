var intersection = function (nums1, nums2) {
  let allNumber = new Set();
  let intersectionNumbers = new Set();

  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  for (let numbers1 of nums1) {
    allNumber.add(numbers1);
  }

  for (let numbers2 of nums2) {
    // console.log(numbers2);

    if (allNumber.has(numbers2)) {
      intersectionNumbers.add(numbers2);
    }
  }

 

  return Array.from(intersectionNumbers);

//   Time : O(n+m);
//   Space : O(n);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
