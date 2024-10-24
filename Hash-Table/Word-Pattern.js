const wordPattern = (pattern, s) => {
  let obj = {};
  let arr = [];
  let char = pattern.split("");
  let str = s.split(" ");
  let lenStr = str.length;
  let len = char.length;
  if (len !== lenStr) return false;

  for (let i = 0; i < len; i++) {
    if (!obj[char[i]]) {
      obj[char[i]] = str[i];
      if (arr.indexOf(str[i]) !== -1) return false;
    } else if (obj[char[i]] !== str[i]) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
