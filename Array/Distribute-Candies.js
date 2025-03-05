var distributeCandies = function (candyType) {
  const count = new Set(candyType);
  console.log(count);

  return Math.min(count.size, candyType.length >> 1);
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
