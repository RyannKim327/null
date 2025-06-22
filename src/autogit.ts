function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    // Outer loop to control the number of passes
    for (let i = 0; i < n - 1; i++) {
        // A flag to check if any swap occurred in the current pass
        let swapped = false;

        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                // Mark that a swap occurred
                swapped = true;
            }
        }

        // If no swaps occurred, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
