function convertToTitle(columnNumber) {
  let res = [];
  while (columnNumber > 0) {
    --columnNumber;

    let num = columnNumber % 26;

    res.unshift(String.fromCharCode(num + 65));
    columnNumber = Math.floor(columnNumber / 26);
    console.log(String.fromCharCode());
  }

  return res.join("");
}

console.log(convertToTitle(56000));
