/*
Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

const longestOnes = function (nums, k) {
  let leftPointer = 0;
  let rightPointer = 0;
  let result = 0;
  let zeroCount = 0;

  while (rightPointer < nums.length) {
    let rightChar = nums[rightPointer];
    if (rightChar === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      let leftChar = nums[leftPointer];
      if (leftChar === 0) zeroCount--;
      leftPointer++;
    }
    result = Math.max(result, rightPointer - leftPointer + 1);
    rightPointer++;
  }
  return result;
};

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
