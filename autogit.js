// Function to get the digit at a specific position in a number
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to count the number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to find the number of digits in the largest number in the input array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Radix Sort function
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// Example usage
let unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
let sortedArray = radixSort(unsortedArray);
console.log(sortedArray);
