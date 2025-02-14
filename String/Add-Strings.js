var addStrings = function (num1, num2) {
    let carry = 0;
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? num1[i] - '0' : 0;
        const digit2 = j >= 0 ? num2[j] - '0' : 0;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
        i--;
        j--;
    }

    return result;
};

console.log(addStrings("121", "11")); // "132"
console.log(addStrings("9333852702227987", "85731737104263")); // "9419584439332250"
