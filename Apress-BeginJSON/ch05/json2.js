JSON.stringify();

function stringify(structure) {
    
    // 如果是字符串类型则直接进行转义
    if (typeof structure=="string") {
        return '"' + String(structure) + '"';
    }
    
    // 如果是对象类型则进行下列处理
    if (typeof structure == "object") {
        var partial = [];
        
        // 分别将属性进行转换
        for (var k in structure) {
            var v = structure[k];
            v = stringify(v);
            partial.push(k + " : " +v);
        }
        
        // if partial does not process children capture opening/closing brackets;
        v = (partial.length === 0)? '{}'
        // otherwise, comma delimit all values within opening/closing brackets
        : ' { ' + partial.join(' , ') + ' } '
        return v;
    }
}