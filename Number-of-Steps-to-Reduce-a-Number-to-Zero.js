const numberOfSteps = function (num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num--;
    }
    steps++;
  }

  return steps;
};
