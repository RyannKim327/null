function getDigit(num: number, place: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(nums: number[]): number {
    let max = 0;
    for (const num of nums) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

function radixSort(nums: number[]): number[] {
    const maxDigitCount = maxDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
        
        for (const num of nums) {
            const digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }

        nums = [].concat(...digitBuckets);
    }
    
    return nums;
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
