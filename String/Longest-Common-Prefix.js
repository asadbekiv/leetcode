const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let i = 0;

  let minLength = strs.reduce((a, b) => {
    return a.length < b.length ? a : b;
  });

  while (i < minLength.length) {
    let char = strs[0][i];

    for (let str of strs) {
      if (str[i] != char) {
        return str.slice(0, i);
      }
    }
    i++;
  }
  return strs[0].slice(0, minLength.length);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["a"]));

// write a function that finds longes common prefix string given array

// let array = [];
// console.log();
