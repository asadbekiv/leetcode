const merge = function (nums1, m, nums2, n) {
  let f = m - 1;
  let s = n - 1;
  let i = m + n - 1;
  while (s >= 0) {
    let fVal = nums1[f];
    let sVal = nums2[s];

    if (fVal > sVal) {
      nums1[i] = fVal;
      i--;
      f--;
    } else {
      nums1[i] = sVal;
      i--;
      s--;
    }
  }
};
