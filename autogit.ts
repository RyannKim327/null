function decimalToBinary(decimal: number): string {
    return (decimal >>> 0).toString(2);
}

const decimalNumber = 10;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber); // Output: 1010
