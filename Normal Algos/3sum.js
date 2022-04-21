/*
3 sum
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);
  let leftPointer, rightPointer;

  //loop through each element
  for (let [index, number] of nums.entries()) {
    if (index > 0 && number === nums[index - 1]) continue;

    leftPointer = index + 1;
    rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      let threeSum = number + nums[leftPointer] + nums[rightPointer];
      if (threeSum > 0) {
        rightPointer--;
      } else if (threeSum < 0) {
        leftPointer++;
      } else {
        result.push([number, nums[leftPointer], nums[rightPointer]]);
        leftPointer++;
        while (
          nums[leftPointer] === nums[leftPointer - 1] &&
          leftPointer < rightPointer
        ) {
          leftPointer++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
