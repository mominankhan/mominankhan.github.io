let number1 = 1;

const value = (number1 > 2) ? 'more than 2' : 'less than 2';
console.log(value);

//const x = 'more than 2';
//const value1 = x || 'less than 2'; // this will return "more than 2"
//console.log(value1);

// Ternary operators can also lead to bad habits:
const value2 = (number1 > 2) ? (typeof x === 'string')? 'string' :'not a string':'less than 2';
console.log(value2);

// The above is so common that ternery operators are not preferred in early code