const countPrimes = function (n) {
  if (n < 2) return 0; // No prime numbers below 2

  let numsArr = Array.from({ length: n }, () => true);
  numsArr[0] = numsArr[1] = false; // 0 and 1 are not prime

  for (let i = 2; i * i < n; i++) {
    if (numsArr[i]) {
      for (let j = i * i; j < n; j += i) {
        numsArr[j] = false; // Mark multiples of i as non-prime
      }
    }
  }

  return numsArr.filter(Boolean).length;
};

console.log(countPrimes(10)); // 2,3,5,7
