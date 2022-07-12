const repeatString = function(string, reps) {
    let ans = ``;
    if(reps < 0)
        return `ERROR`;
    for(let i = 0; i < reps; ++i)
        ans += string;
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
