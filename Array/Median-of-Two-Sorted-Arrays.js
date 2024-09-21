const findMedianSortedArrays = function (nums1, nums2) {
  let mArray = nums1.concat(nums2);
  mArray.sort((a, b) => a - b);
  const middleLeft = Math.floor(mArray.length / 2);

  if (mArray.length % 2 ) {
    return mArray[middleLeft];
  } else {
    return (mArray[middleLeft] + mArray[middleLeft + 1]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 2, 3], [1, 2, 3]));
console.log(findMedianSortedArrays([1, 3], [2]));
