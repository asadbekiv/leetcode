const isValid = function (s) {
  const stack = [];
  const pairs = { "(": ")", "[": "]", "{": "}" };

  for (let char of s) {
    

    if (pairs[char]) {
      stack.push(char);
      
    } else if (char === ")" || char === "]" || char === "}") {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
// console.log(isValid("([])"));
// console.log(isValid("{]"));
