let a = 20;

function f(){
    function foo(){
        console.log(this.a)
    }
    foo()
}

var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };

    }

};

console.log(object.getNameFunc()());
