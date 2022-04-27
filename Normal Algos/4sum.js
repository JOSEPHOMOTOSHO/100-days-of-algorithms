/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

const fourSum = (nums, target) => {
  let solutionArrays = [];

  //first sort the array
  nums.sort((a, b) => a - b);

  //loop through the array except the last 3 numbers (we need to have 4 numbers atleast)
  for (let behindIndex = 0; behindIndex < nums.length - 3; behindIndex++) {
    //check for duplicates
    if (behindIndex > 0 && nums[behindIndex] === nums[behindIndex - 1])
      continue;

    //loop through from the second element
    for (
      let aheadIndex = behindIndex + 1;
      aheadIndex < nums.length - 2;
      aheadIndex++
    ) {
      if (
        aheadIndex > behindIndex + 1 &&
        nums[aheadIndex] === nums[aheadIndex - 1]
      )
        continue;

      let leftPointer = aheadIndex + 1;
      let rightPointer = nums.length - 1;

      while (leftPointer < rightPointer) {
        let fourSum =
          nums[behindIndex] +
          nums[aheadIndex] +
          nums[leftPointer] +
          nums[rightPointer];
        if (fourSum === target) {
          solutionArrays.push([
            nums[behindIndex],
            nums[aheadIndex],
            nums[leftPointer],
            nums[rightPointer],
          ]);
          do {
            leftPointer++;
          } while (nums[leftPointer] === nums[leftPointer - 1]);

          do {
            rightPointer--;
          } while (nums[rightPointer] === nums[rightPointer + 1]);
        } else if (fourSum < target) {
          leftPointer++;
        } else {
          rightPointer--;
        }
      }
    }
  }

  return solutionArrays;
};
//sol => [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
