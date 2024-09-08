const maxOperations = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  nums.sort((a, b) => a - b);

  while (left < right) {
    if (nums[right] + nums[left] < k) {
      left += 1;
    } else if (nums[right] + nums[left] > k) {
      right -= 1;
    } else {
      left += 1;
      right -= 1;
      count += 1;
    }
  }

  return count;
};


console.log(maxOperations([0,1,2,5,6,7,3,10],10));

/*
1 step
sorts [0,1,2,3,5,6,7,10]
2 step
while left<right when this contions is true while works otherwise not
3 step
checks if (exaple 0 and 10 ) if(0+10<2) never reaches left +=1;
else if (0+10>2) true right -=1;
if(0+7<2) false 
else if(7>2) true right -=1;
if(6<2) fasle
else if(6>2) true right=right-1;
................................
if(0+2<2) false
else if(0+2>2) false
else works count=1
left =left+1;
right =right-1


*/

