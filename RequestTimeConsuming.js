async function timeConsuming(url,count,concurrentCount){
    let timeConsume = 0;
    let total = count;
    while(count > 0) {
        let arr = [];
        for(let i = 0;i<concurrentCount;i++)
            arr.push(request(url));
        const results = await Promise.all(arr);
        // console.log(results)
        timeConsume += results.reduce((result,item)=>result+item,0)
        // console.log(timeConsume)
        count -= concurrentCount;
    }
    return timeConsume/total;
}

async function request(url){
    let timeout = Math.random()*200;
    setTimeout(()=>{
        console.log('Request '+url+ ' cost '+timeout+'ms')
    },timeout)
    return Promise.resolve(timeout);
}

console.log(timeConsuming('www.baidu.com',6,2).then(res=>console.log(res)))