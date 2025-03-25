const frequencySort = function (s) {
  let charFrequencyMap = new Map();

  for (let char of s) {
    charFrequencyMap.set(char, (charFrequencyMap.get(char) || 0) + 1);
  }

  let sortedCharacters = Array.from(charFrequencyMap.keys()).sort(
    (a, b) => charFrequencyMap.get(b) - charFrequencyMap.get(a)
  );

  const sortedArray = [];

  for (let char of sortedCharacters) {
    sortedArray.push(char.repeat(charFrequencyMap.get(char)));
  }

  return sortedArray.join("");
};

console.log(frequencySort("tree"));
