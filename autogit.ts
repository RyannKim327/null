function getDigit(num: number, place: number): number {
    return Math.floor((num / Math.pow(10, place)) % 10);
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
    const maxLength = mostDigits(nums);

    for (let i = 0; i < maxLength; i++) {
        const buckets: number[][] = Array.from({length: 10}, () => []);
        
        for (let num of nums) {
            const digit = getDigit(num, i);
            buckets[digit].push(num);
        }

        nums = [].concat(...buckets);
    }

    return nums;
}

// Example usage:
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
