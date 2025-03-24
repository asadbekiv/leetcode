const reverse = function (x) {
  let modefiedNumber = Number(
    Math.abs(x).toString().split("").reverse().join("")
  );

  if (modefiedNumber > 2 ** 31 - 1) return 0;

  return x < 0 ? -modefiedNumber : modefiedNumber;
};

console.log(reverse(123));
console.log(reverse(1230));
console.log(reverse(-123));
