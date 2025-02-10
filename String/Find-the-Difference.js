const findTheDifference = function (s, t) {
  let result = 0;

  for (let char of s + t) {
    result ^= char.charCodeAt(0);
  }

  return String.fromCharCode(result);
};

console.log(findTheDifference("abcd", "abcde"));
