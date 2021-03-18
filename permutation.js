function permutation(arr){
    let result = [];
    if(arr.length === 1)
        return [arr]
    let first = arr[0];
    let rest = arr.slice(1);
    let restPer = permutation(rest);
    for(let i = 0;i < restPer.length;i++){
       for(let j = 0; j < restPer[i].length + 1; j++){
           result.push(restPer[i].slice(0,j).concat([first]).concat(restPer[i].slice(j)))
       }
    }
    return result;
}

let permuteUnique = function (nums) {
    let total = [],res = [];
    nums.sort((x,y)=>(x-y));
    backTrace(nums,res,total, new Set())
    return total;
}

function backTrace(nums,res,total, set){
    if(res.length === nums.length)
        total.push(JSON.parse(JSON.stringify(res)));
    for (let i = 0;i < nums.length; i++){
        if(set.has(i) || (i > 0&&nums[i] === nums[i - 1]&&!set.has(i-1))) continue;
        // if (set.has(i)) continue;
        set.add(i);
        res.push(nums[i]);
        backTrace(nums, res, total, set);
        res.pop();
        set.delete(i);
    }
}
let arr = [1,1,2]
console.log(permuteUnique(arr))

