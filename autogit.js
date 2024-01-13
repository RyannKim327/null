var stringNumber = "42";
var integerNumber = parseInt(stringNumber);

console.log(integerNumber); // Output: 42
var stringNumber = "42";
var integerNumber = Number(stringNumber);

console.log(integerNumber); // Output: 42
var stringNumber = "42abc";
var integerNumber = parseInt(stringNumber);

console.log(integerNumber); // Output: 42

var stringNumber = "abc42";
var integerNumber = parseInt(stringNumber);

console.log(integerNumber); // Output: NaN (Not a Number)
