const pivotIndex = function (nums) {
  let totalSum = 0,
    leftSum = 0;

  nums.forEach((element) => {
    totalSum += element;
  });

  for (let i = 0; i < array.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};
