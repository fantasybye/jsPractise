function loopArr(arr,target){
    if(arr == null||arr.length===0){
        return false;
    }
    let left = 0,right = arr.length - 1;
    let mid;
    while(left <= right){
        mid = Math.floor((left+right)/2);
        if(target === arr[mid]) return true;
        if(arr[left] < arr[mid]){
            if(arr[left] <= target && target < arr[mid])
                right = mid - 1;
            else
                left = mid + 1;
        }
        else {
            if(arr[mid] < target && target <= arr[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    return false;
}

const arr = [6,7,0,3,4]
const target = 2;
console.log(loopArr(arr,target));