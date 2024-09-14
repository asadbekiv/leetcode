const threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    console.log("for loop starts with =", i);

    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    console.log("intialzed left", left);
    console.log("intialized right", right);

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      //   console.log(sum);

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        console.log("SUM", sum);

        left++;
        console.log("left inside else if =", left);
      } else {
        console.log("summm", sum);

        right--;
        console.log("right inside else =", right);
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
