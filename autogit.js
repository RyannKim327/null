// Function to find the maximum number in an array
function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Helper function to get the digit at a particular position
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to get the number of digits in the maximum number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Radix sort function
function radixSort(arr) {
    const maxDigitCount = digitCount(getMax(arr));

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        
        arr = [].concat(...digitBuckets);
    }

    return arr;
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
