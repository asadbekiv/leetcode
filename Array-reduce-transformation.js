const reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < arr.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
