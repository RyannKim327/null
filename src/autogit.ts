function radixSort(arr: number[]): number[] {
    // Helper function to get the maximum number in the array
    const getMax = (array: number[]): number => {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    };

    // Helper function to perform counting sort based on a specific digit
    const countingSortForDigit = (array: number[], digit: number): void => {
        const n = array.length;
        const output: number[] = new Array(n).fill(0);
        const count: number[] = new Array(10).fill(0);

        // Store the count of occurrences in count[]
        for (let i = 0; i < n; i++) {
            const index = Math.floor((array[i] / digit) % 10);
            count[index]++;
        }

        // Update count[i] to store the actual position of this digit in output[]
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // Build the output array
        for (let i = n - 1; i >= 0; i--) {
            const index = Math.floor((array[i] / digit) % 10);
            output[count[index] - 1] = array[i];
            count[index]--;
        }

        // Copy the output array back to the original array
        for (let i = 0; i < n; i++) {
            array[i] = output[i];
        }
    };

    // Main Radix Sort logic
    const max = getMax(arr);

    // Perform counting sort for every digit
    for (let digit = 1; Math.floor(max / digit) > 0; digit *= 10) {
        countingSortForDigit(arr, digit);
    }

    return arr;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Sorted Array: [2, 24, 45, 66, 75, 90, 170, 802]
