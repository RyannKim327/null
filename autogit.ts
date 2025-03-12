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

function countingSortForRadix(nums: number[], place: number): number[] {
    const output: number[] = new Array(nums.length);
    const count: number[] = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let num of nums) {
        const digit = getDigit(num, place);
        count[digit]++;
    }

    // Update count array to contain actual positions
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        const digit = getDigit(num, place);
        output[count[digit] - 1] = num;
        count[digit]--;
    }

    return output;
}

function radixSort(nums: number[]): number[] {
    const maxDigits = mostDigits(nums);

    for (let i = 0; i < maxDigits; i++) {
        nums = countingSortForRadix(nums, i);
    }

    return nums;
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
