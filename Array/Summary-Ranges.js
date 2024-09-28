const summaryRanges = function (nums) {
  let ans = [];
  let i = 0;
  let len = nums.length;

  while (i < len) {
    let start = nums[i];

    while (i < len - 1 && nums[i] + 1 == nums[i + 1]) {
      i += 1;
    }
    if (start != nums[i]) {
      ans.push(`${start}` + "->" + `${nums[i]}`);
    } else {
      ans.push("" + `${start}`);
    }
    i += 1;
  }

  return ans;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
