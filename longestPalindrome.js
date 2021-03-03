//动态规划
function longestPalindrome(s){
    let len = s.length;
    let dp = new Array(len);
    for(let i = 0;i<len;i++){
        dp[i] = [];
        for(let r = 0;r<len;r++){
            dp[i][r] = false
        }
    }
    let result = "";
    for(let l=0;l<len;l++){
        for(let i=0;i+l<len;i++){
            let j = i+l;
            if(l === 0) dp[i][j] = true
            else if(l === 1) dp[i][j] = (s.charAt(i)===s.charAt(j));
            else dp[i][j] = dp[i+1][j-1]&&(s.charAt(i)===s.charAt(j));
            if(dp[i][j]&&result.length < l+1)
                result = s.slice(i,j+1)
        }
    }
    return result;
}

let s = "babad";
console.log(longestPalindrome(s))

//暴力枚举
var longestPalindrome = function(s) {
    let len = s.length;
    if(len <= 1) return s;
    let max = "";
    for(let i=0;i<len;i++){
        for(let j=len-1;j>i;j--){
            if(s.charAt(i)===s.charAt(j)){
                let l=i+1,r=j-1;
                while(l < r&&s.charAt(l)===s.charAt(r)){
                    l++;
                    r--;
                }
                if(r === l||r===l-1){
                    let temp = s.slice(i,j+1);
                    max = temp.length > max.length?temp:max;
                }
            }
        }
    }
    if(max === "") max = s.charAt(0)
    return max;
};