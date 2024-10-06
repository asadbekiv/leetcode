var isPerfectSquare = function (num) {
  // Using Math.sqrt();

  if (Number.isInteger(Math.sqrt(num))) {
    return true;
  } else {
    return false;
  }

  // Without using Math.sqrt()
  //   let i = 1;
  //   while (i * i <= num) {
  //     console.log(i);

  //     if (i * i !== num) {
  //       i++;
  //       continue;
  //     }
  //     return true;
  //   }

  //   return false;
};

console.log(isPerfectSquare(144));
