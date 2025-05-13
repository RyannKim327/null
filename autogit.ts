const decimalNumber: number = 42;
const binaryString: string = decimalNumber.toString(2);

console.log(binaryString); // Output: "101010"
function decimalToBinary(decimal: number): string {
    return decimal.toString(2);
}

console.log(decimalToBinary(42)); // "101010"
console.log(decimalToBinary(15)); // "1111"
function decimalToBinaryArray(decimal: number): number[] {
    return decimal.toString(2).split('').map(bit => parseInt(bit, 10));
}

console.log(decimalToBinaryArray(42)); // [1, 0, 1, 0, 1, 0]
