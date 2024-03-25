// Helper function to get the digit at a specific position in a number
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper function to return the number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to return the number of digits of the largest number in an array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Radix sort implementation
function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        const digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// Example usage
const unsortedArray = [23, 345, 5467, 12, 2345, 9852];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [12, 23, 345, 2345, 5467, 9852]
