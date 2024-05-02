// For this leetcode problem there are two answers right in below
const addTwoPromises = async function (promise1, promis2) {
  const [value1, value2] = await Promise.all([promise1, promis2]);
  return value1 + value2;
};

const addTwoPromisesSenondSolution = async function (promise1, promis2) {
  return value1 + value2;
};
