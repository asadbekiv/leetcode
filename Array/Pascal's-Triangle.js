const generate = function (numRows) {
  let res = [];

  if (numRows >= 1) res.push([1]);
  if (numRows >= 2) res.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
    let row = [1];
    let prevArr = res[i - 1];
    for (let j = 1; j < prevArr.length; j++) {
      row.push(prevArr[j - 1] + prevArr[j]);
    }
    row.push(1);
    res.push(row);
  }

  return res;
};

console.log(generate(5));
