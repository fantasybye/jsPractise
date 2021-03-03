function f1(){
    let n = 1;
    function f2(){
        console.log(n);
    }
    return f2;
}
let result = f1();
result();
