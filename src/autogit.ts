function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    // Outer loop to control the number of passes
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps occurred during this pass, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
const unsortedArray: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
