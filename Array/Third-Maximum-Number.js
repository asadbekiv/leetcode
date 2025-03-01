const thirdMax = function (nums) {
  let uniqueChars = [...new Set(nums)];
  uniqueChars.sort((a, b) => b - a);

  if (uniqueChars.length < 3) {
    return uniqueChars[0];
  } else {
    return uniqueChars[2];
  }
};

// console.log(thirdMax([3, 2, 1])); // 1
// console.log(thirdMax([1, 2])); // 2
// console.log(thirdMax([1])); // 2
// console.log(thirdMax([2, 2, 3, 1])); // 1
// console.log(thirdMax([1, 1, 2])); // 2

console.log(thirdMax([1, 2, 2, 5, 3, 5])); // 2
