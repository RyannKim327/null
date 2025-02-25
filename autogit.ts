function getDigit(num: number, place: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]): number {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums: number[]): number[] {
    const maxDigitCount = mostDigits(nums);
    
    for (let k = 0; k < maxDigitCount; k++) {
        const buckets: number[][] = Array.from({ length: 10 }, () => []);
        
        for (let num of nums) {
            const digit = getDigit(num, k);
            buckets[digit].push(num);
        }
        
        nums = [].concat(...buckets);
    }
    
    return nums;
}

// Example Usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
