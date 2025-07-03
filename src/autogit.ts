function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Reset swapped to false for the current pass

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if elements are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set swapped to true as we made a swap
            }
        }

        // If no two elements were swapped, the array is sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
