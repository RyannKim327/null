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
    const maxDigits = mostDigits(nums);
    
    for (let k = 0; k < maxDigits; k++) {
        // Create buckets for base 10 digits
        const buckets: number[][] = Array.from({ length: 10 }, () => []);
        
        for (let num of nums) {
            const digit = getDigit(num, k);
            buckets[digit].push(num);
        }
        
        // Flatten the buckets back into the nums array
        nums = [].concat(...buckets);
    }
    
    return nums;
}

// Example Usage
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
