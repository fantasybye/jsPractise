function debounce(){
    let valid = true;
    return (data)=>{
        return new Promise(((resolve, reject) => {
            if(!valid)
                reject(data)
            valid=false
            setTimeout(()=>{
                resolve(data)
                valid = true
            },1000)
        }))
    }
}
const request = debounce()
request(1).then((res)=>{
    console.log(res)
})
request(2).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log("err")
})
setTimeout(()=>{
    request(3).then((res)=>{
        console.log(res)
    })
},1000)