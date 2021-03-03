function quickSort(arr,left,right){
    let s = [];
    s.unshift(left);
    s.push(right);
    while (s.length !== 0) {
        right = s.pop();
        left = s.shift();
        let pIndex = findPivotIndex(arr, left, right);
        if(pIndex - 1 > left){
            s.unshift(left)
            s.push((pIndex - 1))
        }
        if(pIndex+1 < right){
            s.push(right);
            s.unshift((pIndex + 1));
        }
    }

}
function findPivotIndex(arr,left,right){
    let pivot = arr[left];
    let pIndex = left;
    while (left <= right){
        while (left <= right){
            if(arr[right] < pivot){
                arr[left] = arr[right];
                left++;
                pIndex = left;
                break;
            }else{
                right--;
            }
        }
        while (left <= right){
            if(arr[left] > pivot){
                arr[right] = arr[left];
                right--;
                pIndex = right;
                break;
            }else{
                left++
            }
        }
    }
    arr[pIndex] = pivot;
    return pIndex;
}
let arr = [2,7,8,3,2]
quickSort(arr,0,arr.length)
console.log(arr)