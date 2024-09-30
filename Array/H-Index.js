const hIndex = function (citations) {
  let len = citations.length;

  let paperCounts = Array(len + 1).fill(0);

  for (let c of citations) {
    paperCounts[Math.min(len, c)] += 1;
  }
  let h = len;
  let papers = paperCounts[len];
  while (papers < h) {
    h -= 1;
    papers += paperCounts[h];
  }
  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
