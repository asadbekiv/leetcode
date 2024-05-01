const filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]); /*when i use concat mehtod instead of push leetcode return me wrong answer as an output*/
    }
  }
  return filteredArr;
};



