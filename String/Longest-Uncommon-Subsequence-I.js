var findLUSlength = function (a, b) {
  if (a === b) return -1;
  return Math.max(a.length, b.length);
};

console.log(findLUSlength("aba", "cdc")); // 3
console.log(findLUSlength("aaa", "aaa")); // -1
console.log(findLUSlength("aefawfawfawfaw", "aefawfeawfwafwaef")); // 17

