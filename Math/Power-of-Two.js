var isPowerOfTwo = function (n) {
  let num = 1;
  while (num < n) {
    num *= 2;
  }

  return num === n;
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(3));
