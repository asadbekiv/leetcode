const isThree = function (n) {
  // if n has 3 devisers return true else false

  let res = [];

  for (let i = 0; i < n; i++) {
    if (i !== 1 && i !== n && n % i == 0) {
      res.push(i);
    }
  }

  return res.length === 1 ? true : false;
};

console.log(isThree(4));
console.log(isThree(2));
console.log(isThree(12));
