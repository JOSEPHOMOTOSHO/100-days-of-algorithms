/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:
3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104

*/
const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let bestSum = Number.MAX_SAFE_INTEGER;
  let leftPointer, rightPointer;
  //loop through each element

  for (let [index, number] of nums.entries()) {
    if (index > 0 && number === nums[index - 1]) continue;

    leftPointer = index + 1;
    rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      let threeSum = number + nums[leftPointer] + nums[rightPointer];

      if (threeSum === target) {
        return target;
      }

      if (Math.abs(target - threeSum) < Math.abs(target - bestSum)) {
        bestSum = threeSum;
      }

      if (threeSum <= target) {
        leftPointer++;

        while (
          nums[leftPointer] === nums[leftPointer - 1] &&
          leftPointer < rightPointer
        ) {
          leftPointer++;
        }
      } else {
        rightPointer--;
      }
    }
  }
  return bestSum;
};
