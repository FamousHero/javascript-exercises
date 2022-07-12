const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(elem => !args.includes(elem));

};

// Do not edit below this line
module.exports = removeFromArray;
