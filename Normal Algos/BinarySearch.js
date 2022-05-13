

const search = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while(left <= right ){
        let half = left + ~~((right - left ) / 2)
        half
        if(nums[half] === target){
            return half
        }else if(nums[half] > target){
            right = half - 1
        }else{
            left = half + 1
        }
    }
   return -1
};

console.log((search([-1,0,3,5,9,12],9)));