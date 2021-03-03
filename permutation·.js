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
let arr = [1,2,3]
console.log(permutation(arr))