Function.prototype.MyBind = function (thisArg, ...args){
    if(thisArg == null||typeof thisArg === 'undefined'){
        thisArg = window;
    }
    let self = this;
    let bound = function (){
        let funcArgs = args.concat(Array.prototype.slice.call(arguments))//将对bind返回函数的新传入的参数并入bind的参数
        return self.apply(this instanceof bound ? this:thisArg, funcArgs)
    }
    //处理bind返回的函数被new调用的情况
        //绑定函数也可以使用new运算符构造，提供的this值会被忽略”。新的this指向就应该是new运算符构造出来的this指向
    bound.prototype = Object.create(self.prototype)//保证通过new 的原型链不会出错
    return bound;
}