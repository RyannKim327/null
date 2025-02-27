function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap using destructuring
        }
    }
    return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(array));
