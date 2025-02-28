const groupAnagrams = function (strs) {
  let newArr = {};
  strs.forEach((elem) => {
    key = elem.split("").sort().join("");

    newArr[key] ? newArr[key].push(elem) : (newArr[key] = [elem]);
  });
  return Object.values(newArr);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[" "]]
console.log(groupAnagrams(["a"])); // [["a"]]
