const wordBreak = function (s, wordDict) {
  let table = new Array(s.length + 1).fill(false);

  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;
    for (let j = i + 1; j < table.length; j++) {
      if (wordDict.includes(s.slice(i, j))) {
        table[j] = true;
      }
    }
  }

  return table[table.length - 1];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
