function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps were made, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Sorted Array: [11, 12, 22, 25, 34, 64, 90]
