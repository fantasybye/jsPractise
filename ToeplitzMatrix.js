var isToeplitzMatrix = function(matrix) {
    let m = matrix[0].length;
    let n = matrix.length;
    if(m === n&&m === 1) return true;
    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            if(matrix[j][i]!==matrix[j-1][i-1]){
                return false
            }
        }
    }
    return true;
};
matrix = [[11,74,0,93],[40,11,74,7]]
console.log(isToeplitzMatrix(matrix))