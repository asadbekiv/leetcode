const compress = function (chars) {
  let index = 0;
  let count = 1;
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      chars[index] = chars[i - 1];
      index++;

      if (count > 1) {
        for (const digit of count.toString()) {
          chars[index] = digit;
          index++;
        }
      }
      count = 1;
    }
  }

  return index;
};

console.log(
  compress([
    "a",
    "a",

    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "c",
    "c",
    "c",
  ])
);
