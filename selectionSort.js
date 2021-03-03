function swap(arr, i, j){
    arr[i] = arr[i]^arr[j];
    arr[j] = arr[i]^arr[j];
    arr[i] = arr[i]^arr[j];
}

function selectionSort(arr){
    if(arr == null || arr.length < 2) return;
    // let min = arr[0];
    // let index = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i;j < arr.length; j++){
            if(arr[i] > arr[j]){
                swap(arr, i, j)
            }
        }
    }
}

let arr = [1,2,4,5,7,1,3];
selectionSort(arr)
console.log(arr)