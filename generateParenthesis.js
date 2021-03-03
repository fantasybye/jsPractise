var generateParenthesis = function(n) {
    let res = [];
    let cur = [];
    backtrack(res,cur,0,0,n)
    return res;
};

function backtrack(res,cur,left,right,n){
    if(cur.length===n*2){
        res.push(cur.join(""));
        return;
    }
    if(left < n){
        cur.push("(");
        backtrack(res,cur,left+1,right,n);
        cur.pop();
    }
    if(right < left){
        cur.push(")");
        backtrack(res,cur,left,right+1,n);
        cur.pop();
    }
}