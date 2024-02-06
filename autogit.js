function decimalToBinary(decimal) {
  let binaryDigits = [];
  
  while (decimal > 0) {
    let remainder = decimal % 2;
    binaryDigits.unshift(remainder);
    decimal = Math.floor(decimal / 2);
  }
  
  return binaryDigits.join('');
}
let decimalNumber = 42;
let binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber);  // Output: "101010"
