const containsDuplicate = function (nums) {
  const map = {};

  for (let num of nums) {
    if (map[num]) {
      console.log(map[num]);

      return true;
    } else {
      map[num] = true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// console.log(containsDuplicate([1, 2, 3, 4]));
