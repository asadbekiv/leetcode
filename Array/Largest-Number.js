var largestNumber = function (nums) {
  const sorted =
    nums
      .sort((a, b) => {
        return b + "" + a - (a + "" + b);
      })
      .join("")
      .replace(/^0*/, "") || "0";

  return sorted;
};
console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
