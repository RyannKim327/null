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
    const countingSortForDigit = (array: number[], digitPlace: number): void => {
        const n = array.length;
        const output: number[] = new Array(n).fill(0);
        const count: number[] = new Array(10).fill(0);

        // Count occurrences of each digit at the current digit place
        for (let i = 0; i < n; i++) {
            const index = Math.floor((array[i] / digitPlace) % 10);
            count[index]++;
        }

        // Update count array to store cumulative counts
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // Build the output array by placing elements in their correct positions
        for (let i = n - 1; i >= 0; i--) {
            const index = Math.floor((array[i] / digitPlace) % 10);
            output[count[index] - 1] = array[i];
            count[index]--;
        }

        // Copy the sorted elements back into the original array
        for (let i = 0; i < n; i++) {
            array[i] = output[i];
        }
    };

    // Main Radix Sort logic
    const max = getMax(arr);

    // Perform counting sort for each digit place (1s, 10s, 100s, etc.)
    for (let digitPlace = 1; Math.floor(max / digitPlace) > 0; digitPlace *= 10) {
        countingSortForDigit(arr, digitPlace);
    }

    return arr;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
