const longestPalindrome = function (s) {
  let map = new Map();
  let res = 0;
  for (char of s) {
    if (map.has(char)) {
      map.delete(char);
      res += 2;
    } else {
      map.set(char);
    }
  }

  return map.size > 0 ? res + 1 : res;
};

console.log(longestPalindrome("abccccdd")); // 7
// console.log(longestPalindrome("a")); // 1
// console.log(longestPalindrome("bb")); // 2
// console.log(longestPalindrome("ab")); // 1
