let findShortestSubArray = function(nums) {
    let hash = {};
    nums.map((num)=>{
        if(!hash.hasOwnProperty(num))
            hash[num] = 1;
        else hash[num] += 1;
    })
    let max = Object.values(hash).sort((a,b)=>(b-a))[0];
    let arr = Array.from(new Set(nums));
    let min = nums.length;
    for (let num in arr){
        if(hash[arr[num]]<max) continue;
        let du = nums.lastIndexOf(arr[num])-nums.indexOf(arr[num])+1;
        if(du < min){
            min = du;
        }
    }
    return min;
};
function findShortestSubArray2(nums){
    let hash = {};
    for(const [key, value] of Object.entries(nums)){
        if(!hash.hasOwnProperty(value))
            hash[value] = [1, key, key];
        else {
            hash[value][0] ++;
            hash[value][2] = key;
        }
    }
    let max=0,min=0;
    for(const [count, left, right] of Object.values(hash)){
        if(count > max){
            max = count;
            min = right - left + 1;
        }else if(count === max){
            let len = right - left + 1;
            min = len < min?len:min;
        }
    }
    return min;
}
console.log(findShortestSubArray2([1,2,2,3,1]))