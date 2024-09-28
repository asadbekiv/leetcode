var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let price of prices) {

    if (price < minPrice) {
      minPrice = price;

    }
    let profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
 

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// find min number given array and find max number given array and subtract it return
