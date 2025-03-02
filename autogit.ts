function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    // One by one move the boundary of the unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if the element is smaller
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
