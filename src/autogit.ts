function radixSort(arr: number[]): number[] {
    // Helper function to get the digit at a specific place
    const getDigit = (num: number, place: number): number => {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    };

    // Helper function to count the number of digits in a number
    const digitCount = (num: number): number => {
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    };

    // Helper function to find the maximum number of digits in the array
    const mostDigits = (nums: number[]): number => {
        let maxDigits = 0;
        for (const num of nums) {
            maxDigits = Math.max(maxDigits, digitCount(num));
        }
        return maxDigits;
    };

    // Main Radix Sort logic
    const maxDigits = mostDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        // Create buckets for digits 0-9
        const buckets: number[][] = Array.from({ length: 10 }, () => []);

        // Place each number in the corresponding bucket based on the current digit
        for (const num of arr) {
            const digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        // Flatten the buckets back into the array
        arr = ([] as number[]).concat(...buckets);
    }

    return arr;
}

// Example usage
const unsortedArray = [329, 457, 657, 839, 436, 720, 355];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [329, 355, 436, 457, 657, 720, 839]
