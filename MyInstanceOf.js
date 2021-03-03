Object.prototype.MyInstanceOf = function (F){
    if(this === null) return false;
    let p = F.prototype;
    let o = Object.getPrototypeOf(this)
    while (true){
        if(o === null) return false
        if(p === o) return true
        o = Object.getPrototypeOf(o)
    }
}

let obj = [1,2,3]
console.log(obj.MyInstanceOf(Array))