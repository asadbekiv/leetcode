const addBinary = function (a, b) {
  let len = Math.max(a.length, b.length);
  a = a.padStart(len, "0");
  b = b.padStart(len, "0");
  let carry = 0;
  let res = "";

  for (let i = len - 1; i >= 0; i--) {
    let mBit = +a[i];
    let nBit = +b[i];
    let sum = mBit + nBit + carry;
    carry = Math.floor(sum / 2);
    res = (sum % 2) + res;
  }
  return carry ? "1" + res : res;
};



