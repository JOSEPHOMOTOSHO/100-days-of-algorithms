/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 const firstMissingPositive = (nums) =>  {

    for(let i = 0; i<nums.length ; i++){
        let convertedToIndex = nums[i] - 1
        if(convertedToIndex === i || nums[convertedToIndex] === nums[i]) continue
        if(convertedToIndex >= 0 && convertedToIndex < nums.length ){
            [nums[convertedToIndex],nums[i]] = [nums[i], nums[convertedToIndex]] //swap
            i--  //go back to check if correct num is at the correct position
        }
    }
    
    for(let i = 0; i<nums.length; i++){
        if(i+1 === nums[i]) continue
        return i+1
    }
    
    
    return nums.length + 1
};

console.log(firstMissingPositive([1,2,0]),3);