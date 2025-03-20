const findLucky = function (arr) {
  const counter = new Array(501).fill(0);
  for (const num of arr) {
    counter[num]++;
  }
  let ans = -1;

  for (let i = 1; i < counter.length; ++i) {
    if (counter[i] === i) {
      ans = i;
    }
  }
  return ans;
};

console.log(findLucky([2, 2, 3, 4])); // 2
console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
