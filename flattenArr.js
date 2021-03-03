function flattenArr(arr){
    return arr.reduce((result,item)=>{
        return result.concat(item instanceof Array?flattenArr(item):item)
    },[])
}
function flattenArrSplit(arr){
    return arr.toString().split(",").map(item =>parseInt(item))
}
const arr=[1,[2,3],[4,[5,6,7]],8,[9,0]]
console.log(flattenArrSplit(arr))