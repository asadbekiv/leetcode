const mergeAlternately = function (word1, word2) {
  let merged = [];
  let w1 = word1.lenght;
  let w2 = word2.length;
  let minVal = Math.min(w1, w2);
  for (let i = 0; i < minVal; i++) {
    merged.push(word1[i] + word2[i]);
  }
  if (w1 > w2) {
    merged = merged.concat(word1.slice(minVal));
  } else if (w2 > w1) {
    merged = merged.concat(word2.slice(minVal));
  }
  return merged.join("");
};
