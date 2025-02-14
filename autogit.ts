function getDigit(num: number, digitIndex: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, digitIndex)) % 10;
}

function getDigitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxDigitCount(nums: number[]): number {
    let maxDigitCount = 0;
    for (const num of nums) {
        maxDigitCount = Math.max(maxDigitCount, getDigitCount(num));
    }
    return maxDigitCount;
}

function radixSort(nums: number[]): number[] {
    const maxDigitCount = getMaxDigitCount(nums);

    for (let digitIndex = 0; digitIndex < maxDigitCount; digitIndex++) {
        const buckets: number[][] = Array.from({ length: 10 }, () => []);
        
        for (const num of nums) {
            const digit = getDigit(num, digitIndex);
            buckets[digit].push(num);
        }
        
        nums = [].concat(...buckets);
    }
    
    return nums;
}

// Example Usage:
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
