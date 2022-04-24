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
    result;
    rightPointer++;
  }
  return result;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
