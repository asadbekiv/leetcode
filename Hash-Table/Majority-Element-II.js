const majorityElement = function (nums) {
  let count1 = 0;
  let count2 = 0;
  let candidates1 = nums[0] || 0;
  let candidates2 = nums[1] || 1;

  for (let num of nums) {
    if (num === candidates1) {
      count1++;
    } else if (num === candidates2) {
      count2++;
    } else if (count1 === 0) {
      candidates1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidates2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  let res = new Array();

  count1 = nums.filter((num) => num === candidates1).length;
  count2 = nums.filter((num) => num === candidates2).length;

  if (count1 > Math.floor(nums.length / 3)) {
    res.push(candidates1);
  }

  if (candidates1 !== candidates2 && count2 > Math.floor(nums.length / 3)) {
    res.push(candidates2);
  }

  return res;
};
