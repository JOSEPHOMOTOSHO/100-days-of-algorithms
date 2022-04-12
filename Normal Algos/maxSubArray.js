var minSubArrayLen = function (target, nums) {
  let leftPointer = 0;
  let rightPointer = 0;
  let max = 0;
  let collect = [];
  while (rightPointer < nums.length) {
    if (nums[rightPointer] === target) return 1;
    let sum = collect.reduce((acc, cv) => acc + cv, 0);
    if (nums[rightPointer] < target && sum <= target) {
      collect.push(nums[rightPointer]);
      rightPointer++;
    }
    if (sum === target) return collect.length;
    if (nums[rightPointer] > target && sum > target) {
      collect = [];
      leftPointer++;
      rightPointer = leftPointer;
    }
  }
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
