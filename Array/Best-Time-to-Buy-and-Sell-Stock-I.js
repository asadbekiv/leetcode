const maxProfit = function (prices) {
  let i = 0;
  let len = prices.length;
  let buy = prices[0];
  let sell = prices[0];
  let profit = 0;

  while (i < len - 1) {
    // find where to buy
    while (i < len - 1 && prices[i] >= prices[i + 1]) {
      i += 1;
    }
    buy = prices[i];

    // find where to sell
    while (i < len - 1 && prices[i] <= prices[i + 1]) {
      i += 1;
    }
    // console.log(prices[i]);

    sell = prices[i];
    profit += sell - buy;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));

// Time : O(n)
// Space : O(1)
