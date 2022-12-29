const fibonacci = function(depth) {
    let i = 0; let j =1;
    if(depth <= 0)
    return "OOPS";
    for(let k = 0; k < depth; ++k)
    {
        let temp = j;
        j = i+j;
        i = temp;
        console.log(i);
    }
    return i;
};

// Do not edit below this line
module.exports = fibonacci;
