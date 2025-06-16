function bubbleSort(arr: number[]): number[] {
    // Create a copy of the array to avoid mutating the original
    const result = [...arr];
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        // Flag to detect any swap during this pass
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                // Swap adjacent elements if they are in wrong order
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }

        // If no two elements were swapped by inner loop, array is sorted
        if (!swapped) {
            break;
        }
    }

    return result;
}

// Example usage:
const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(unsorted);
console.log("Sorted array:", sorted);
