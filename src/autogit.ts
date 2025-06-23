function radixSort(arr: number[]): number[] {
    // Helper function to get the digit at a specific place
    const getDigit = (num: number, place: number): number => {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    };

    // Helper function to find the maximum number of digits in the array
    const getMaxDigits = (arr: number[]): number => {
        let maxDigits = 0;
        for (const num of arr) {
            maxDigits = Math.max(maxDigits, num.toString().length);
        }
        return maxDigits;
    };

    const maxDigits = getMaxDigits(arr);

    // Perform counting sort for each digit position
    for (let place = 0; place < maxDigits; place++) {
        const buckets: number[][] = Array.from({ length: 10 }, () => []);

        // Distribute numbers into buckets based on the current digit
        for (const num of arr) {
            const digit = getDigit(num, place);
            buckets[digit].push(num);
        }

        // Flatten the buckets back into the array
        arr = ([] as number[]).concat(...buckets);
    }

    return arr;
}

// Example usage
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
