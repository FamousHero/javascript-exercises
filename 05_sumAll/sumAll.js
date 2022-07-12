const sumAll = function(startindex, endindex) {
    let ans = 0;
//can use typeof or isNumber()
    if(typeof(startindex) !=  'number' 
        || typeof(endindex) != 'number')
        return `ERROR`;
    if(startindex < 0 || endindex < 0)
        return `ERROR`
    if(startindex > endindex)
    {
        let temp = endindex;
        endindex = startindex;
        startindex = temp;
    }
    for(let i = startindex; i <= endindex; ++i)
        ans += i;
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
