const tribonacci = function (n) {
  let arr = new Array(38);
  arr[0] = 0;
  arr[1] = arr[2] = 1;

  console.log(arr[2]);

  for (let i = 0; i < n; i++) {
    arr[i + 3] = arr[i] + arr[i + 1] + arr[i + 2];
    arr[i] = arr[i + 1] + arr[i + 2] - arr[i + 3];
    console.log(arr[i ]);

    return arr[i];
  }
};

console.log(tribonacci(25));
