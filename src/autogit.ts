function decimalToBinary(num: number): string {
    return num.toString(2);
}

// Usage
const decimalNumber = 25;
const binaryString = decimalToBinary(decimalNumber);
console.log(`Decimal: ${decimalNumber} -> Binary: ${binaryString}`);
// Output: Decimal: 25 -> Binary: 11001
function decimalToBinarySigned(num: number): string {
    if (num >= 0) {
        return num.toString(2);
    } else {
        // For simplicity, showing 32-bit two's complement
        return (num >>> 0).toString(2);
    }
}

// Usage
const negativeDecimal = -25;
const binaryNegative = decimalToBinarySigned(negativeDecimal);
console.log(`Decimal: ${negativeDecimal} -> Binary: ${binaryNegative}`);
// Output: Decimal: -25 -> Binary: 11111111111111111111111111100111
function decimalToBinaryBitwise(num: number): string {
    if (num === 0) return '0';

    let binary = '';
    let n = Math.abs(num);

    while (n > 0) {
        const bit = n & 1; // Get the least significant bit
        binary = bit + binary; // Prepend the bit to the result string
        n >>= 1; // Shift right by 1 to process the next bit
    }

    if (num < 0) {
        // For negative numbers, prepend a '-' sign
        binary = '-' + binary;
    }

    return binary;
}

// Usage
const anotherDecimal = 18;
const binaryAnother = decimalToBinaryBitwise(anotherDecimal);
console.log(`Decimal: ${anotherDecimal} -> Binary: ${binaryAnother}`);
// Output: Decimal: 18 -> Binary: 10010
function decimalToBinaryTwoComplement(num: number, bits: number = 32): string {
    if (bits <= 0) throw new Error("Bits must be greater than 0");

    // Handle two's complement for negative numbers
    if (num < 0) {
        num = (1 << bits) + num;
    }

    let binary = '';
    for (let i = bits - 1; i >= 0; i--) {
        const bit = (num >> i) & 1;
        binary += bit;
    }

    return binary;
}

// Usage
const negativeNum = -3;
const binaryTwoComp = decimalToBinaryTwoComplement(negativeNum, 8);
console.log(`Decimal: ${negativeNum} -> 8-bit Binary (Two's Complement): ${binaryTwoComp}`);
// Output: Decimal: -3 -> 8-bit Binary (Two's Complement): 11111101
function decimalToBinaryManual(num: number): string {
    if (num === 0) return '0';
    
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num = Math.abs(num);
    }

    let binaryDigits: number[] = [];
    while (num > 0) {
        const remainder = num % 2;
        binaryDigits.unshift(remainder); // Add to the front
        num = Math.floor(num / 2);
    }

    let binaryString = binaryDigits.join('');
    if (isNegative) {
        binaryString = '-' + binaryString;
    }

    return binaryString;
}

// Usage
const manualDecimal = 42;
const binaryManual = decimalToBinaryManual(manualDecimal);
console.log(`Decimal: ${manualDecimal} -> Binary: ${binaryManual}`);
// Output: Decimal: 42 -> Binary: 101010
function decimalToBinaryPadded(num: number, width: number): string {
    if (width <= 0) throw new Error("Width must be greater than 0");

    let binary = '';
    let n = Math.abs(num);

    for (let i = 0; i < width; i++) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }

    // If the number was negative, handle two's complement
    if (num < 0) {
        // Compute two's complement manually
        let inverted = binary.split('').map(bit => bit === '0' ? '1' : '0').join('');
        let invertedNum = parseInt(inverted, 2) + 1;
        binary = invertedNum.toString(2).padStart(width, '0');
    }

    return binary;
}

// Usage
const paddedDecimal = 5;
const binaryPadded = decimalToBinaryPadded(paddedDecimal, 8);
console.log(`Decimal: ${paddedDecimal} -> 8-bit Binary: ${binaryPadded}`);
// Output: Decimal: 5 -> 8-bit Binary: 00000101

const negPaddedDecimal = -5;
const binaryNegPadded = decimalToBinaryPadded(negPaddedDecimal, 8);
console.log(`Decimal: ${negPaddedDecimal} -> 8-bit Binary (Two's Complement): ${binaryNegPadded}`);
// Output: Decimal: -5 -> 8-bit Binary (Two's Complement): 11111011
// Method 1: Using toString(2)
function decimalToBinaryToString(num: number): string {
    return num.toString(2);
}

// Method 2: Using Bitwise Operations
function decimalToBinaryBitwise(num: number): string {
    if (num === 0) return '0';
    let binary = '';
    let n = Math.abs(num);
    while (n > 0) {
        binary = (n & 1) + binary;
        n >>= 1;
    }
    return num < 0 ? '-' + binary : binary;
}

// Method 3: Manual Conversion
function decimalToBinaryManual(num: number): string {
    if (num === 0) return '0';
    let isNegative = num < 0;
    num = Math.abs(num);
    let binaryDigits: number[] = [];
    while (num > 0) {
        binaryDigits.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    let binary = binaryDigits.join('');
    return isNegative ? '-' + binary : binary;
}

// Testing the functions
const testNumbers = [0, 5, 25, -3, 42];

testNumbers.forEach(num => {
    console.log(`Decimal: ${num}`);
    console.log(`  toString(2): ${decimalToBinaryToString(num)}`);
    console.log(`  Bitwise:     ${decimalToBinaryBitwise(num)}`);
    console.log(`  Manual:      ${decimalToBinaryManual(num)}`);
});
Decimal: 0
  toString(2): 0
  Bitwise:     0
  Manual:      0
Decimal: 5
  toString(2): 101
  Bitwise:     101
  Manual:      101
Decimal: 25
  toString(2): 11001
  Bitwise:     11001
  Manual:      11001
Decimal: -3
  toString(2): -11
  Bitwise:     -11
  Manual:      -11
Decimal: 42
  toString(2): 101010
  Bitwise:     101010
  Manual:      101010
