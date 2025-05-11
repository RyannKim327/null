function radixSort(arr: number[]): number[] {
    if (arr.length === 0) return arr;

    // Find the maximum number to know number of digits
    const maxNum = Math.max(...arr);

    // Helper function to get digit at given place value
    const getDigit = (num: number, place: number): number => {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    };

    // Determine how many digits the largest number has
    const maxDigits = Math.floor(Math.log10(maxNum)) + 1;

    for (let k = 0; k < maxDigits; k++) {
        // Create buckets for each digit 0-9
        const buckets: number[][] = Array.from({ length: 10 }, () => []);

        // Distribute numbers into buckets based on kth digit
        for (const num of arr) {
            const digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        // Flatten buckets back into array
        arr = ([] as number[]).concat(...buckets);
    }

    return arr;
}

// Example usage:
const unsorted = [170, 45, 75, 90, 802, 24, 2, 66];
const sorted = radixSort(unsorted);
console.log(sorted); // [2, 24, 45, 66, 75, 90, 170, 802]
