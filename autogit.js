// Function to get the digit at a particular position of a number
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to find the number of digits in the largest number in the array
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to find the maximum number of digits in all the numbers in the array
function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

// Radix sort implementation
function radixSort(arr) {
    const maxDigits = mostDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

// Test the radix sort implementation
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
