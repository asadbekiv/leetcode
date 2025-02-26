var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const res = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul =
        (num1[i].charCodeAt(0) - "0".charCodeAt(0)) *
        (num2[j].charCodeAt(0) - "0".charCodeAt(0));

      const sum = mul + res[i + j + 1];

      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }

  while (res[0] === 0) {
    res.shift();
  }

  return res.join("");
};

console.log(multiply("2", "3")); // 6
console.log(multiply("123", "456")); // 56088
console.log(multiply("123456789", "987654321")); // 121932631112635269
