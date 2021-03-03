function _new(constructor, ...params){
    // let args = [].slice.call(arguments);
    // constructor = args.shift();
    let context = Object.create(constructor.prototype);
    let result = constructor.apply(context, params);
    return (typeof result === 'object' && result != null)?result:context
}
console.log(0.1+0.2)