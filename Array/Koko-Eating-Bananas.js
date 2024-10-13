const minEatingSpeed = function (piles, h) {
  let [l, r] = [1, Math.max(...piles)];
  while (l < r) {
    const m = (l + r) >> 1; 
    console.log('hi',m);

    const s = piles.map((x) => Math.ceil(x / m)).reduce((a, b) => a + b);
    if (s <= h) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
