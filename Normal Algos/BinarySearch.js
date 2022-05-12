

const search = (nums, target) => {
    let half = ~~(nums.length / 2)
    let left = 0
    let right = nums.length - 1
    while(left < right && nums[half] !== target){
        if(nums[half] > target  ){
            right =  half - 1
        }else if(nums[half] < target  ){
             left =  half + 1
        }
        half = ~~((right - left) / 2)
    }
    return nums[half] === target ? nums.indexOf(nums[half]) : -1
};

console.log((search([-1,0,3,5,9,12],9)));