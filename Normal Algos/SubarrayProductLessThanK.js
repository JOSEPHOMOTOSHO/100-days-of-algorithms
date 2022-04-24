/*
Given an array of integers nums and an integer k, return the number of 
contiguous subarrays where the product of all the elements in the subarray 
is strictly less than k.

 

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
 

Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  let product = 1;
  let result = 0;
  let leftPointer = 0;
  let rightPointer = 0;

  if (k <= 1) return null;

  while (rightPointer < nums.length) {
    product *= nums[rightPointer];

    while (product >= k) {
      product /= nums[leftPointer];
      leftPointer++;
    }
    result += rightPointer - leftPointer + 1;
    rightPointer++;
  }
  return result;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100), 8);
