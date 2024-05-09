const expect = function (val) {
  function toBe(val2) {
    if (val === val2) {
      return true;
    } else {
      return "Not Equal";
    }
  }

  function notToBe(val) {
    if (val !== val2) {
      return true;
    } else {
      return "Equal";
    }
  }

  return { toBe, notToBe };
};
