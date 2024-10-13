var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let result = 0;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (m > x / m) {
      r = m - 1;
    } else if (m < x / m) {
      l = m + 1;
      result = m;
    } else {
      return m;
    }
  }

  return result;
};

console.log(mySqrt(10));
