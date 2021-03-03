function swap(arr, i, j){
    arr[i] = arr[i]^arr[j];
    arr[j] = arr[i]^arr[j];
    arr[i] = arr[i]^arr[j];
}

let len;
function heap(arr,i){
    let left = 2*i+1,right = 2*i+2;
    let largest = i;
    if(left < len&&arr[left]>arr[largest]){
        largest = left;
    }
    if(right<len&&arr[right]>arr[largest]){
        largest = right;
    }
    if(largest !== i){
        swap(arr,largest,i)
        heap(arr,largest)
    }
}

function buildMaxHeap(arr){
    len = arr.length;
    for(let i = Math.floor(len/2);i >= 0;i--){
        heap(arr, i)
    }
}

function heapSort(arr){
    buildMaxHeap(arr);
    for(let i = arr.length - 1;i > 0;i--){
        swap(arr, i, 0);
        len--;
        heap(arr, 0);
    }
}
const arr = [4,5,3,2,7,5,4,1]
heapSort(arr)
console.log(arr)