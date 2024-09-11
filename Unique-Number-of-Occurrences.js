var uniqueOccurrences = function (arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 0) {
      map[arr[i]] = map[arr[i]] + 1;
    } else {
      map[arr[i]] = 0;
    }
  }
  console.log(Object.values(map));

  let r = false;
  Object.values(map).forEach((el) => {
    if (el > 0) {
      r = true;
    }
  });

  return r;
};


function uniqueOccurrences(arr) {
  let numObj = {};
  for (let num of arr) {
    numObj[num] = (numObj[num] || 0) + 1;
  }

  let occurenses = Object.values(numObj);
  let uniqueOccurrences = new Set(occurenses);

  return occurenses.length === uniqueOccurrences.size;
}

console.log(uniqueOccurrences([1, 2, 3]));
