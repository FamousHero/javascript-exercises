const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;

};

const sum = function(a) {
	return a.reduce((total, elem)=>{return total+elem},0);
};

const multiply = function(a) {
  return a.length === 0? 0: a.reduce((total, elem)=>{return total*elem});
};

const power = function(a,b) {
	let ans=1;
  for(let i =0; i < b; ++i)
  {
    ans *= a;
  }
  return ans;
};

const factorial = function(a) {
	if(a <= 1){
    return 1;
  }
  return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
