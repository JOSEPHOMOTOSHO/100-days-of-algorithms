/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

 

Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
*/

const findUnsortedSubarray = (nums) => {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  let sorted = true;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] < nums[index - 1]) {
      sorted = false;
      if (!sorted) {
        min = Math.min(min, nums[index]);
      }
      sorted = true;
    }
  }

  for (let index = nums.length - 2; index >= 0; index--) {
    if (nums[index] > nums[index + 1]) {
      sorted = false;
      if (!sorted) {
        max = Math.max(max, nums[index]);
      }
      sorted = true;
    }
  }

  let leftPointer;
  for (leftPointer = 0; leftPointer < nums.length; leftPointer++) {
    if (min < nums[leftPointer]) {
      break;
    }
  }

  let rightPointer;
  for (rightPointer = nums.length - 1; rightPointer >= 0; rightPointer--) {
    if (max > nums[rightPointer]) {
      break;
    }
  }

  return rightPointer - 1 < 0 ? 0 : rightPointer - leftPointer + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]), 5);
