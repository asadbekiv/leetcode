const romanToInt = function (s) {
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  let len = s.length;
  let i = 0;
  console.log(len);

  while (i < len) {
    if (i < len - 1 && roman[s[i]] < roman[s[i + 1]]) {
      sum += roman[s[i + 1]] - roman[s[i]];

      i += 2;
    } else {
      sum += roman[s[i]];
      i += 1;
    }
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));
