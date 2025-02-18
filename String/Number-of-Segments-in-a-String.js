const countSegments = function (s) {
  // Anilize the string if it exsit of empty strings return 0
  // else if string has words return number of words
  // what is the diffenrence between "" and  "    " => find it
  
  return s.split(" ").filter((segment) => {
    segment.length > 0;
  }).length;
};

console.log(countSegments("   "));
console.log(countSegments(" Hello "));
