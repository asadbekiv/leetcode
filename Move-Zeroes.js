const moveZeroes = function (nums) {
  let noneZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[noneZeroIndex] = nums[i];
      noneZeroIndex++;
    }
  }


  for (let i = noneZeroIndex; i < nums.length; i++) {
    nums(i)=0
    
  }

  return nums
};


