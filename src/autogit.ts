function decimalToBinary(num: number): string {
    if (!Number.isInteger(num)) {
        throw new Error("Input must be an integer.");
    }
    return num.toString(2);
}

// Usage:
const decimal = 10;
const binary = decimalToBinary(decimal);
console.log(`Decimal: ${decimal} -> Binary: ${binary}`); // Output: Decimal: 10 -> Binary: 1010
function decimalToBinaryManual(num: number): string {
    if (!Number.isInteger(num)) {
        throw new Error("Input must be an integer.");
    }

    if (num === 0) return '0';

    let binary = '';
    let n = Math.abs(num); // Handle negative numbers by taking absolute value

    while (n > 0) {
        const remainder = n % 2;
        binary = remainder + binary; // Prepend the remainder
        n = Math.floor(n / 2);
    }

    if (num < 0) {
        binary = '-' + binary; // Add negative sign if original number was negative
    }

    return binary;
}

// Usage:
const decimal = 10;
const binary = decimalToBinaryManual(decimal);
console.log(`Decimal: ${decimal} -> Binary: ${binary}`); // Output: Decimal: 10 -> Binary: 1010

const negativeDecimal = -10;
const negativeBinary = decimalToBinaryManual(negativeDecimal);
console.log(`Decimal: ${negativeDecimal} -> Binary: ${negativeBinary}`); // Output: Decimal: -10 -> Binary: -1010
function decimalToBinaryBitwise(num: number): string {
    if (!Number.isInteger(num)) {
        throw new Error("Input must be an integer.");
    }

    if (num === 0) return '0';

    let binary = '';
    let n = Math.abs(num);

    for (let i = 31; i >= 0; i--) {
        const bit = (n >> i) & 1;
        binary += bit;
    }

    // Remove leading zeros
    binary = binary.replace(/^0+/, '');

    if (num < 0) {
        binary = '-' + binary;
    }

    return binary;
}

// Usage:
const decimal = 10;
const binary = decimalToBinaryBitwise(decimal);
console.log(`Decimal: ${decimal} -> Binary: ${binary}`); // Output: Decimal: 10 -> Binary: 1010

const negativeDecimal = -10;
const negativeBinary = decimalToBinaryBitwise(negativeDecimal);
console.log(`Decimal: ${negativeDecimal} -> Binary: ${negativeBinary}`); // Output: Decimal: -10 -> Binary: -1010
