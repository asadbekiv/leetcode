const findPoisonedDuration = function (timeSeries, duration) {
  const n = timeSeries.length;
  let res = duration;
  for (let i = 1; i < n; ++i) {
    res += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
  }

  return res;

};

console.log(findPoisonedDuration([1, 4], 2));
