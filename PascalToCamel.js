/**
 * 把对象的 key 从横杠形式（Pascal）转换到小驼峰形式（Camel）
 * @param {Object} obj
 * @returns {Object}
 * @example
 * {
 *   user_name: 'tom',
 *   current_position: 'mid',
 *   child_node: {
 *     curr_age: 10,
 *   },
 * };
 * 转换后
 * {
 *   userName: 'tom',
 *   currentPosition: 'mid',
 *   childNode: {
 *     currAge: 10,
 *   },
 * };
 */
function convert(obj) {
    //深拷贝新建一个对象，但是改变键名
    let res;
    if(typeof obj === 'object'){
        if(Array.isArray(obj)){
            res = [];
            for(let i = 0;i<obj.length;i++){
                res.push(convert(obj[i]))
            }
        } else if(obj == null){
            res = null;
        } else {
            res = {};
            Object.keys(obj).forEach((key)=>{
                if(typeof obj[key] === 'object'){
                    res[PtoC(key)] = convert(obj[key]);
                }else {
                    Object.defineProperty(res,PtoC(key),Object.getOwnPropertyDescriptor(obj,key));
                }
            });
        }
    }
    return res;
}

function PtoC(key){
    //转换键名
    if(key.indexOf('_') !== -1){
        let nameArr = key.split('_');
        for(let i = 0;i < nameArr.length;i++){
            nameArr[i] = nameArr[i].charAt(0).toUpperCase()+nameArr[i].slice(1);
        }
        return nameArr.join('');
    }
    return key;
}
let obj = {
    asd_sd:1,
    da_da: function (){

    },
    ds_ad:[
        {ii_oo:4},{a_s:3}
    ],
    bing:{
        sds_sd:2,
        fg_i:3
    }
}
console.log(convert(obj))