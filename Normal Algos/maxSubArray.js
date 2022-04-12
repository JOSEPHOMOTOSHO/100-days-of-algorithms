var minSubArrayLen = function (target, nums) {
  let result = Number.MAX_VALUE;
  let leftPointer = 0;
  let sum = 0;

  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];

    while (sum >= target) {
      result = Math.min(result, index + 1 - leftPointer);
      sum -= nums[leftPointer];
      leftPointer++;
    }
  }
  return result != Number.MAX_VALUE ? result : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
