var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const ans = [""];
  const d = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  for (const digit of digits) {
    const s = d[+digit - 2];
    const t = [];

    for (const a of ans) {
      for (const b of s) {
        t.push(a + b);
      }
    }

    ans.splice(0, ans.length, ...t);
  }

  return ans;
};

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]
console.log(letterCombinations("7")); // ["p","q","r","s"]
console.log(letterCombinations("78")); // ["pt","pu","pv","qt","qu","qv","rt","ru","rv","st","su","sv"]
