Array.prototype.MySlice = function (begin,end){
    // console.log(this)
    let start = begin || 0;
    let len = this.length;
    start = (start >= 0)? start:Math.max(len + start, 0);
    end = (typeof end === 'number')? Math.min(end, len):len;
    if (end < 0){
        end = end+len;
    }
    let result = [];
    for(let i = start;i<end;i++){
        result.push(this[i]);
    }
    return result
}
// function list() {
//     return Array.prototype.MySlice.call(arguments);
// }
let arr=[1,2,3]
console.log(arr.MySlice(1))