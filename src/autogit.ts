function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    // Traverse through all elements in the array
    for (let i = 0; i < n - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Find the index of the smallest element in the remaining unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Sorted Array: [11, 12, 22, 25, 64]
