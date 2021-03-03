function maxSatisfied(customers,grumpy,X){
    let total = 0;
    let len = customers.length;
    for(let  i = 0;i < len;i ++){
        if(grumpy[i] === 0){
            total += customers[i];
        }
    }
    let increase = 0;
    for(let i = 0;i < X;i++){
        if(grumpy[i] === 1){
            increase += customers[i];
        }
    }
    let max = increase;
    for(let i = X;i<len;i++){
        increase = (increase + grumpy[i]*customers[i]-grumpy[i-X]*customers[i-X])
        max = increase > max ? increase:max;
    }
    return max+total;
}