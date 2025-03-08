const isPowerOfFour = function (n) {
  let num = 1;

  while (num < n) {
    num *= 4;
  }

  return num === n;
};
