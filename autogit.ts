function selectionSort(arr: number[]): number[] {
    const n: number = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current position is the minimum
        let minIndex: number = i;

        // Find the index of the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a new minimum is found
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            const temp: number = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const unsortedArray: number[] = [64, 25, 12, 22, 11];
const sortedArray: number[] = selectionSort(unsortedArray);
console.log("Sorted array:", sortedArray);
