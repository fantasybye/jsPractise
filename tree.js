function newNode(){
    return {
        value:null,
        left:null,
        right:null,
        have:false
    }
}

function tree(obj){
    obj = obj.split(")");
    obj.pop();
    let newObj = [];
    for(let i = 0;i < obj.length;i++){
        newObj.push(obj[i].replace("(",""));
    }
    let root = newNode();
    let p;
    for(let i = 0;i < newObj.length;i++){
       let arg1 = newObj[i].split(",")[0];
       let arg2 = newObj[i].split(",")[1];
       p = root;
       if(arg2 !== ''){
           for(let j = 0; j < arg2.length; j++){
               if(arg2[j] === "L"){
                   if(p.left == null){
                       p.left = newNode();
                       p = p.left;
                   }else{
                       p = p.left;
                   }
               }else if(arg2[j] === "R"){
                   if(p.right == null){
                       p.right = newNode();
                       p = p.right;
                   }else{
                       p = p.right;
                   }
               }
           }
           if(!p.have){
               p.value = arg1;
               p.have = true;
           }
       }else {
           root.value = arg1;
           root.have = true;
       }
    }
    return root;
}
const root = tree('(11,LL)(7,LLL)(8,R)(5,)(4,L)(13,RL)(2,LLR)(1,RRR)(4,RR)');
function bfs(root){
    let front=0,rear=1,n=0;
    let queue=[],ans=[];
    queue[0] = root;
    while (front<rear){
        let p = queue[front++];
        if(!p.have) return;
        ans[n++]=p.value;
        if(p.left!==null)
            queue[rear++]=p.left;
        if(p.right!==null)
            queue[rear++]=p.right;
    }
    console.log(ans.join(" "))
}
function ldr(root){
    //中序遍历
    let p = root;
    let ans = []
    if(!p.have) return;
    if(p.left != null)
        ans = ans.concat(ldr(p.left));
    ans.push(p.value);
    if(p.right != null)
        ans = ans.concat(ldr(p.right));
    return ans;
}
// bfs(root)
console.log(ldr(root).join(" "))