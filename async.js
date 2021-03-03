function sleep(delay){
    return new Promise(resolve => {
        setTimeout(resolve,delay)
    })
}
async function f() {
    await sleep(5000);
    console.log(123)
}
f();
