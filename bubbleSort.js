function bubbleSort(arr){
    if(arr == null) return;
    for(let i = arr.length;i > 0;i--){
        for(let j = 0;j < i - 1;j++){
            if(arr[j] < arr[j+1]){
                arr[j] = arr[j]^arr[j+1]
                arr[j + 1] = arr[j]^arr[j+1]
                arr[j] = arr[j]^arr[j+1]
            }
        }
    }
}
let arr = [1,2,5,6,4,2,1];
bubbleSort(arr);
console.log(arr.join(" "))