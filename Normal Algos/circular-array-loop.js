/*
You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:

If nums[i] is positive, move nums[i] steps forward, and
If nums[i] is negative, move nums[i] steps backward.
Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and moving backwards from the first element puts you on the last element.

A cycle in the array consists of a sequence of indices seq of length k where:

Following the movement rules above results in the repeating index sequence seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...
Every nums[seq[j]] is either all positive or all negative.
k > 1
Return true if there is a cycle in nums, or false otherwise.

 

Example 1:

Input: nums = [2,-1,1,2,2]
Output: true
Explanation:
There is a cycle from index 0 -> 2 -> 3 -> 0 -> ...
The cycle's length is 3.
Example 2:

Input: nums = [-1,2]
Output: false
Explanation:
The sequence from index 1 -> 1 -> 1 -> ... is not a cycle because the sequence's length is 1.
By definition the sequence's length must be strictly greater than 1 to be a cycle.
Example 3:

Input: nums = [-2,1,-1,-2,-2]
Output: false
Explanation:
The sequence from index 1 -> 2 -> 1 -> ... is not a cycle because nums[1] is positive, but nums[2] is negative.
Every nums[seq[j]] must be either all positive or all negative.
 

Constraints:

1 <= nums.length <= 5000
-1000 <= nums[i] <= 1000
nums[i] != 0

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const circularArrayLoop = (nums) =>  {
    if(nums.length <= 1) return false 
    for(let i = 0; i < nums.length;i++){
        let isForward = nums[i] > 0 ? true : false
        let slowPointer = i
        let fastPointer = i
        while(true){
            slowPointer = getNextPosition(nums, slowPointer, isForward)
            if(slowPointer === -1) break
            
            fastPointer = getNextPosition(nums, fastPointer, isForward)
            if(fastPointer === -1) break
            
            fastPointer = getNextPosition(nums, fastPointer, isForward)
            if(fastPointer === -1) break
            
            if(fastPointer === slowPointer) return true
            
        }
    }
    return false
};

const getNextPosition = (nums,index,isForward) => {
    //Does the current element say we move forward/backward?
    let direction = nums[index] >= 0
    
    //confirm if we are generally moving forward
    if(direction !== isForward) return -1
    
    //lets get the next index through the current value
    let nextIndex = (nums[index] + index) % nums.length
    
    //getting the same index means you have a single element
    if(nextIndex === index) return -1
    
    //if the nextindex is negative you'd need to count backwards
    if(nextIndex < 0){
        nextIndex = nextIndex + nums.length
    }
    
    return nextIndex
    
}

console.log(circularArrayLoop( [2,-1,1,2,2]),true)