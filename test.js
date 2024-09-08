// let account=[[1,2,3],[4,5,6]];

// let n1=0;
// for (let i = 0; i <= account.length; i++) {
//   let n2=0;
//   for (let j = 0; j <= account[i].length; j++) {
//     n2 +=account[i][j];
//   }
//   n1=Math.max(n1,n2);
// }

// const maximumWealth=function(accounts){

//   let n1=0;
//   for (let i = 0; i < accounts.length; i++) {
//     let n2=0;
//     for (let j = 0; j < accounts[i].length; j++) {
//       n2 +=accounts[i][j];
//     }
//     n1=Math.max(n1,n2);
//   }

//   return n1;

// };
// console.log(maximumWealth([[1,2,3],[4,5,6]]));
// console.log(maximumWealth([[1,2,3],[4,5,6],[1,2,3,4,5,6]]));

let nums = [1, 2, 3, 4, 5, 6];
nums[0] = nums[0].toString();
nums[1] = nums[1].toString();

console.log(nums);

// const runningSum = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] += nums[i];
//   }

//   return nums;
// };

// console.log(runningSum([1, 2, 3, 4, 5, 6]));
