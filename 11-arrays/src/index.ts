//Given an array of positive integers as input, return the maximum value in the array


function getMax(nums: number[]) {
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let maxVal: number = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const current: number =  nums[i];
        if (current > maxVal) {
            maxVal = current;
        }
    }

    return maxVal;
}
