function swap(arr, i, j){
    arr[i] = arr[i]^arr[j];
    arr[j] = arr[i]^arr[j];
    arr[i] = arr[i]^arr[j];
}

function insertionSort(arr){
    for(let i = 1;i < arr.length;i++){
        for(let j = i;j > 0; j--){
            if(arr[j] < arr[j - 1]){
                swap(arr, j, j - 1);
            } else break;
        }
    }
    console.log(arr.join(" "))
}
let arr = [1,2,4,5,7,1,3];
insertionSort(arr)

export {insertionSort};