function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (array) {
	let sum = array.reduce(function(total,element){
	return total+element
	}
	,0);
	return sum
}

function multiply (array) {
	let product = array.reduce((total,element) => total * element,1)
	return product
}

function power(a,b) {
	return Math.pow(a,b)
	
}

function factorial(a) {
	let fac = 1;
	for(let i = 1;i <= a;i++){
		fac = fac * i
	}
	return fac
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}