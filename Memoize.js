const memoize = function (fn) {
  let cash = new Map();
  return function (...args) {
    const key = args.toLocaleString();
    if (cash.has(key)) {
      return cash.get(key);
    } else {
      const result = fn(...args);
      cash.set(key, result);
      return result;
    }
  };
};
