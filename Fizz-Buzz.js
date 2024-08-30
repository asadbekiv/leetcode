const fizzBuzz = function (n) {
  let answers = [];

  for (let i = 1; i <= n; i++) {
    let divisble3 = i % 3 === 0;
    let divisble5 = i % 5 === 0;

    let curentStr = "";

    if (divisble3) {
      curentStr = curentStr + "Fizz";
    }

    if (divisble5) {
      curentStr = curentStr + "Buzz";
    }
    if (curentStr === "") {
      curentStr = i.toString();
    }

    answers.push(curentStr);
  }

  return answers;
};

console.log(fizzBuzz(20));

Merge-Strings-Alternately
