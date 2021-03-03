Function.prototype.MyApply=function (thisArg,args){
    if(thisArg === null||typeof thisArg === 'undefined'){
        thisArg = window;
    }
    let fnSymbol = Symbol('fn');//采用symbol使得不会与原来对象中的属性发生冲突
    thisArg[fnSymbol] = this;//this指的是function的实例，将function赋予需要指向的对象并执行，返回执行结果
    let fn = thisArg[fnSymbol](...args)
    delete thisArg[fnSymbol];
    return fn;
}
obj={
    name:"hello"
}
// window.name = "world"
let name = "world"
function test(num){
    console.log(this.name)
}

test(1)
test.MyApply(obj,[1])