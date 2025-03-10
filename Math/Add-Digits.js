var addDigits = function (num) {
  while (num >= 10) {
    let sum = 0;
    let number = num.toString().split("");
    number.forEach((element) => {
      sum += Number(element);
    });

    num = sum;
  }

  return num;
  // Digit root
  //   return num===0?0:1+(num-1)%9;
};

console.log(addDigits(389686)); // 4
console.log(addDigits(38)); // 2
