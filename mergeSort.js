function mergeSort(arr){
    if(arr.length < 2) return arr;
    let middle = Math.floor(arr.length/2);
    return merge(mergeSort(arr.slice(0,middle)),mergeSort(arr.slice(middle)))
}

function merge(left,right){
    let res = [];
    let lIndex = 0;
    let rIndex = 0;
    while(lIndex < left.length && rIndex < right.length){
        while(left[lIndex] <= right[rIndex]){
            res.push(left[lIndex++]);
        }
        while(left[lIndex] > right[rIndex]){
            res.push(right[rIndex++]);
        }
    }
    while (lIndex < left.length)
        res.push(left[lIndex++]);
    while(rIndex < right.length)
        res.push(right[rIndex++]);
    return res;
}

const arr = [4,5,3,2,7,5,4,1]
console.log(mergeSort(arr))