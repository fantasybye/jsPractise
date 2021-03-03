function swap(arr, i, j){
    arr[i] = arr[i]^arr[j];
    arr[j] = arr[i]^arr[j];
    arr[i] = arr[i]^arr[j];
}
function shellSort(arr){
    for(let gap = Math.floor(arr.length / 2);gap > 0;gap = Math.floor(gap / 2)){
        for(let i = gap; i < arr.length; i++){
            if(i-gap>=0&&arr[i-gap]>arr[i]){
                swap(arr, i-gap, i)
            }
        }
    }
    console.log(arr)
}
let arr = [1,2,4,5,7,1,3];
shellSort(arr)