const maxVowels = function (s, k) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxvowels = 0;
  let currentCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentCount++;
    }
  }
  maxvowels = currentCount;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      currentCount--;
    }
    if (vowels.has(s[i])) {
      currentCount++;
    }
    maxvowels = Math.max(maxvowels, currentCount);
  }

  return maxvowels;
};
