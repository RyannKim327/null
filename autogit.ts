function decimalToBinary(decimal: number): string {
    return decimal.toString(2);
}

const decimalNumber = 25;
const binaryString = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryString}`);
