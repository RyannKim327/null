function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the index of the minimum element in the unsorted part
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage
const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 64]
