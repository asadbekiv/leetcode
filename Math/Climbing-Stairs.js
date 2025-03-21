const climbStairs = function (n) {
  let previous = 1;
  let current = 1;

  for (let i = 1; i < n; i++) {
    [previous, current] = [current, previous + current];
  }

  return current;
};

console.log(climbStairs(4));
