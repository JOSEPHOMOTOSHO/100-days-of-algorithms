/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
    let result = []
    for(let i = 0; i<nums.length; i++){
        //we referenced something before, while moving forward we referenced again, the //duplicate rference is the duplicate value
      let convertToIndex = Math.abs(nums[i]) - 1
     if(nums[convertToIndex] < 0){
         result.push(Math.abs(nums[i]))
     }else{
        nums[convertToIndex] = Math.abs( nums[convertToIndex] ) * -1
     }
   
    }
    return result
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]),[2,3])