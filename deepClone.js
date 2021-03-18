function deepClone(from){
    let to = Array.isArray(from)?[]:{};
    if(from&&typeof from === 'object'){
        Object.keys(from).forEach((key)=>{
            if(from[key]&&typeof from[key]==='object'){
                to[key] = deepClone(from[key])
            }else{
                Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
            }
        })
    }
    return to;
}

let obj = Number(123)
let objDC = deepClone(obj)
let objJson = JSON.parse(JSON.stringify(obj))
// obj.p1 = 3
console.log(obj)
console.log(objDC)
console.log(objJson)

//Number String Boolean等包装类
function clone(obj){
    return obj.valueOf()
}

//Date
Date.prototype.clone = function (){
    return new Date(this.valueOf())
}
var date=new Date('2010');
var newDate=date.clone();

//RegExp
RegExp.prototype.clone = function() {
    var pattern = this.valueOf();
    var flags = '';
    flags += pattern.global ? 'g' : '';
    flags += pattern.ignoreCase ? 'i' : '';
    flags += pattern.multiline ? 'm' : '';
    return new RegExp(pattern.source, flags);
};
var reg=new RegExp('/111/');
var newReg=reg.clone();
//newReg->  /\/111\//

function PtoC(key){
    if(key.includes('_')){
        let keyArr = key.split('_')
    }
    
}