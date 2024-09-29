const sortColors = function (nums) {
  let counts = [0, 0, 0];

  for (let color of nums) {
    counts[color] += 1;
  }
  let index = 0;

  for (let i = 0; i < counts[0]; i++) {
    nums[index++] = 0;
  }

  for (let i = 0; i < counts[1]; i++) {
    nums[index++] = 1;
  }

  for (let i = 0; i < counts[2]; i++) {
    nums[index++] = 2;
  }
  console.log(nums);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
