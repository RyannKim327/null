const decimalNumber = 42;
const binaryString = decimalNumber.toString(2);
console.log(binaryString);  // Outputs: "101010"
function decimalToBinary(decimal: number): string {
    return decimal.toString(2);
}

console.log(decimalToBinary(42)); // "101010"
function decimalToBinaryManual(decimal: number): string {
    if (decimal === 0) return '0';
    let binary = '';
    let num = decimal;
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

console.log(decimalToBinaryManual(42)); // "101010"
