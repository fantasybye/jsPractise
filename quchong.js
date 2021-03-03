function quchong(arr){
    let hash={}
    for(let i = 0;i<arr.length;i++){
        if(!hash.hasOwnProperty(arr[i])){
            hash[arr[i]] = arr[i];
        }
    }
    return Object.values(hash);
}
console.log(quchong2([1,2,3,4,5,1,3]))

function quchong2(arr){
    let res = [];
    for (let i = 0;i < arr.length;i++){
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }
    }
    return res;
}