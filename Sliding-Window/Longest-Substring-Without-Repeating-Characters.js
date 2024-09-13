const lengthOfLongestSubstring = function (s) {
  let left = 0;
  let longest = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
