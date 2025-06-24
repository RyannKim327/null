function decimalToBinary(num: number): string {
    return num.toString(2);
}

// Usage
const decimalNumber = 42;
const binaryString = decimalToBinary(decimalNumber);
console.log(`Decimal: ${decimalNumber} -> Binary: ${binaryString}`);
// Output: Decimal: 42 -> Binary: 101010
function decimalToBinaryManual(num: number): string {
    if (num === 0) return '0';
    
    let isNegative = num < 0;
    num = Math.abs(num);
    
    let binaryDigits: string[] = [];
    
    while (num > 0) {
        const remainder = num % 2;
        binaryDigits.push(remainder.toString());
        num = Math.floor(num / 2);
    }
    
    // The binary digits are collected in reverse order
    binaryDigits.reverse();
    
    let binaryString = binaryDigits.join('');
    
    if (isNegative) {
        binaryString = '-' + binaryString;
    }
    
    return binaryString;
}

// Usage
const decimalNumber = 42;
const binaryString = decimalToBinaryManual(decimalNumber);
console.log(`Decimal: ${decimalNumber} -> Binary: ${binaryString}`);
// Output: Decimal: 42 -> Binary: 101010

const negativeDecimalNumber = -42;
const negativeBinaryString = decimalToBinaryManual(negativeDecimalNumber);
console.log(`Decimal: ${negativeDecimalNumber} -> Binary: ${negativeBinaryString}`);
// Output: Decimal: -42 -> Binary: -101010
function decimalToBinaryBitwise(num: number): string {
    if (num === 0) return '0';
    
    let isNegative = num < 0;
    num = Math.abs(num);
    
    let binaryDigits: string[] = [];
    
    // Assuming 32-bit integers for this example
    for (let i = 31; i >= 0; i--) {
        const bit = (num >> i) & 1;
        binaryDigits.push(bit.toString());
    }
    
    // Remove leading zeros
    let firstOne = binaryDigits.indexOf('1');
    if (firstOne === -1) {
        return '0'; // All zeroes
    }
    binaryDigits = binaryDigits.slice(firstOne);
    
    let binaryString = binaryDigits.join('');
    
    if (isNegative) {
        binaryString = '-' + binaryString;
    }
    
    return binaryString;
}

// Usage
const decimalNumber = 42;
const binaryString = decimalToBinaryBitwise(decimalNumber);
console.log(`Decimal: ${decimalNumber} -> Binary: ${binaryString}`);
// Output: Decimal: 42 -> Binary: 101010

const negativeDecimalNumber = -42;
const negativeBinaryString = decimalToBinaryBitwise(negativeDecimalNumber);
console.log(`Decimal: ${negativeDecimalNumber} -> Binary: ${negativeBinaryString}`);
// Output: Decimal: -42 -> Binary: -101010
function decimalToBinaryTwosComplement(num: number, bits: number = 32): string {
    if (bits <= 0) {
        throw new Error("Number of bits must be positive.");
    }

    const isNegative = num < 0;
    num = Math.abs(num);

    // Convert to binary without considering sign
    let binary = num.toString(2);

    // Pad with leading zeros to fit the specified number of bits
    binary = binary.padStart(bits, '0');

    if (isNegative) {
        // Compute two's complement
        let inverted = binary.split('').map(bit => bit === '0' ? '1' : '0').join('');
        let twosComplement = (parseInt(inverted, 2) + 1).toString(2);
        
        // Ensure the result has the same number of bits
        twosComplement = twosComplement.padStart(bits, '0');
        return twosComplement;
    }

    return binary;
}

// Usage
const decimalNumber = -42;
const binaryString = decimalToBinaryTwosComplement(decimalNumber, 8);
console.log(`Decimal: ${decimalNumber} -> Binary (8-bit two's complement): ${binaryString}`);
// Output: Decimal: -42 -> Binary (8-bit two's complement): 11010110
