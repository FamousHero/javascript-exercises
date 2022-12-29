const palindromes = function (s) {
    const parsedS = s.toLowerCase().replace(/[^a-z]/g, "");
    let left = 0;
    let right = parsedS.length-1;
    while(left <= right)
    {
        if(parsedS[left++] !== parsedS[right--])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
