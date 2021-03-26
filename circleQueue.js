function circleQueue(n,m){
    let arr = new Array(n);
    let len = n;
    for(let i = 0;i < n;i++)
        arr[i] = 0;
    let count = 0;
    for(let i = 0;len > 1;i=(++i)%n){
        if(arr[i]!==-1) {
            count++;
            if(count === m){
                arr[i] = -1;
                len--;
                count = 0;
            }
        }
    }
    for(let i = 0;i < n;i++){
        if(arr[i] !== -1){
            return (i+1);
        }
    }
    return -1;
}
let index = circleQueue(10,3)
console.log(index)