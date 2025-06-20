function decimalToBinary(num: number): string {
    if (num < 0) {
        throw new Error("Negative numbers are not supported.");
    }
    return num.toString(2);
}

// Usage
const decimal = 18;
const binary = decimalToBinary(decimal);
console.log(`Decimal: ${decimal} -> Binary: ${binary}`); // Output: Decimal: 18 -> Binary: 10010
function decimalToBinaryWithSign(num: number): string {
    if (num === 0) return '0';
    const isNegative = num < 0;
    let absNum = Math.abs(num);
    let binary = '';

    while (absNum > 0) {
        binary = (absNum % 2) + binary;
        absNum = Math.floor(absNum / 2);
    }

    return isNegative ? '-' + binary : binary;
}

// Usage
const decimalNegative = -18;
const binaryNegative = decimalToBinaryWithSign(decimalNegative);
console.log(`Decimal: ${decimalNegative} -> Binary: ${binaryNegative}`); // Output: Decimal: -18 -> Binary: -10010
function decimalToBinaryBitwise(num: number): string {
    if (num < 0) {
        throw new Error("Negative numbers are not supported.");
    }
    if (num === 0) return '0';

    let binary = '';
    let n = num;

    while (n > 0) {
        // Use bitwise AND to get the least significant bit
        binary = (n & 1) + binary;
        // Right shift to process the next bit
        n >>= 1; 
    }

    return binary;
}

// Usage
const decimalBitwise = 18;
const binaryBitwise = decimalToBinaryBitwise(decimalBitwise);
console.log(`Decimal: ${decimalBitwise} -> Binary: ${binaryBitwise}`); // Output: Decimal: 18 -> Binary: 10010
function decimalToBinaryRecursive(num: number): string {
    if (num < 0) {
        throw new Error("Negative numbers are not supported.");
    }
    if (num === 0) return '0';
    if (num === 1) return '1';

    return decimalToBinaryRecursive(Math.floor(num / 2)) + (num % 2).toString();
}

// Usage
const decimalRecursive = 18;
const binaryRecursive = decimalToBinaryRecursive(decimalRecursive);
console.log(`Decimal: ${decimalRecursive} -> Binary: ${binaryRecursive}`); // Output: Decimal: 18 -> Binary: 10010
function decimalToBinaryToString(num: number): string {
    if (num < 0) {
        throw new Error("Negative numbers are not supported.");
    }
    return num.toString(2);
}

function decimalToBinaryBitwise(num: number): string {
    if (num < 0) {
        throw new Error("Negative numbers are not supported.");
    }
    if (num === 0) return '0';

    let binary = '';
    let n = num;

    while (n > 0) {
        binary = (n & 1) + binary;
        n >>= 1;
    }

    return binary;
}

function decimalToBinaryRecursive(num: number): string {
    if (num < 0) {
        throw new Error("Negative numbers are not supported.");
    }
    if (num === 0) return '0';
    if (num === 1) return '1';

    return decimalToBinaryRecursive(Math.floor(num / 2)) + (num % 2).toString();
}

// Test the functions
const decimals = [0, 1, 2, 5, 18, 255];

decimals.forEach(decimal => {
    console.log(`Decimal: ${decimal}`);
    console.log(`  toString(2): ${decimalToBinaryToString(decimal)}`);
    console.log(`  Bitwise:     ${decimalToBinaryBitwise(decimal)}`);
    console.log(`  Recursive:   ${decimalToBinaryRecursive(decimal)}`);
});
Decimal: 0
  toString(2): 0
  Bitwise:     0
  Recursive:   0
Decimal: 1
  toString(2): 1
  Bitwise:     1
  Recursive:   1
Decimal: 2
  toString(2): 10
  Bitwise:     10
  Recursive:   10
Decimal: 5
  toString(2): 101
  Bitwise:     101
  Recursive:   101
Decimal: 18
  toString(2): 10010
  Bitwise:     10010
  Recursive:   10010
Decimal: 255
  toString(2): 11111111
  Bitwise:     11111111
  Recursive:   11111111
function bigIntToBinary(bigInt: bigint): string {
    return bigInt.toString(2);
}

// Usage
const bigDecimal = BigInt("9007199254740991"); // Number.MAX_SAFE_INTEGER
const bigBinary = bigIntToBinary(bigDecimal);
console.log(`BigInt Decimal: ${bigDecimal} -> Binary: ${bigBinary}`);
// Output: BigInt Decimal: 9007199254740991 -> Binary: 111111111111111111111111111111111111111111111111111111
