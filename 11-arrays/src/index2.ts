function getMaxVal(nums : number[]){


    let maxVal = Number.NEGATIVE_INFINITY;

    for (const num of nums){
        if (num > maxVal){
            maxVal = num
        }
    }

    return maxVal
}

const ans = getMaxVal([1,2,3]);
console.log(ans);