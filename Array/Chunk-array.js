const chunk = function (arr, size) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, size + index));
    index += size;
  }
  return chunked;
};
