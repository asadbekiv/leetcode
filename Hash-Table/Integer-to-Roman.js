const intToRoman = function (num) {
  const romanSymbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  const res = [];

  for (let i = 0; i < values.length; ++i) {
    while (num >= values[i]) {
      num = num - values[i];

      res.push(romanSymbols[i]);
    }
  }

  return res.join("");
};

console.log(intToRoman(3749)); //"MMMDCCXLIX"
