function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // Iterate over the array
    for (let i = 0; i < n; i++) {
        swapped = false; // Reset swapped flag each iteration
        // Last i elements are already sorted, no need to check them
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Mark as swapped
            }
        }
        // If no elements were swapped, the array is sorted
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
