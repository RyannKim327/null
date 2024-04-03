// Helper function to get the digit at a specific position
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to find the number of digits in the largest number in an array
function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

// Radix Sort implementation
function radixSort(arr) {
    const maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
