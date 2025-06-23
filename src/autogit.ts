function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    // Outer loop to control the number of passes
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Optimized flag to detect if any swaps occurred

        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Mark that a swap occurred
            }
        }

        // If no swaps occurred during this pass, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5] (already sorted)
console.log(bubbleSort([]));              // Output: [] (empty array)
console.log(bubbleSort([10]));            // Output: [10] (single element)
