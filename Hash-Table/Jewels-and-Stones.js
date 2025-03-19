const numJewelsInStones = function (jewels, stones) {
  let jewelsSet = new Set(jewels);
  let count = 0;



  for (let char of stones) {
    if (jewelsSet.has(char)) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
