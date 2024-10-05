const isPalindrome = function (s) {
  //   s.replace(/[^a-zA-Z0-9]/g, "");
  let S = s
    .replace(/[^a-zA-Z0-9]/g, "", " ")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  if (s.replace(/[^a-zA-Z0-9]/g, "", " ").toLowerCase() === S) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("12345"));
