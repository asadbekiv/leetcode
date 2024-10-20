const isHappy = function (n) {
  let sum = 0;
  let stringNumber = n.toString().split("");
  let digitOfNumbersArray = stringNumber.map((e) => parseInt(e));
  let len = digitOfNumbersArray.length;

  for (let i = 0; i < len; i++) {
    sum += Math.pow(digitOfNumbersArray[i], 2);
  }

  if (sum === 1) {
    return true;
  } else if (sum === 4) {
    return false;
  } else {
    return isHappy(sum);
  }
  // Time: O(log n)^2
  // Space: O(log n)
};

console.log(isHappy(19));
