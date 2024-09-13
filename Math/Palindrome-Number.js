const isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reversed === original;
};

console.log(true || true);
console.log(true && true);

// console.log(isPalindrome(-121));
