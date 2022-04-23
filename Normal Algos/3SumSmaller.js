/*
Given an array of n integers nums and a target, find the number of index triplets 
i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Input: nums = [-2,0,1,3], and target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumSmaller = (nums, target) => {
  //   nums.sort((a, b) => a - b);
  let result = 0;
  let leftPointer, rightPointer;
  //loop through each element
  for (let [index, number] of nums.entries()) {
    if (index > 0 && number === nums[index - 1]) continue;
    leftPointer = index + 1;
    rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      let threeSum = number + nums[leftPointer] + nums[rightPointer];
      if (threeSum < target) {
        result = result + (rightPointer - leftPointer);
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return result;
};

console.log(threeSumSmaller([-2, 0, 1, 3], 2));
