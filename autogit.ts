function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element of the unsorted part
        let minIndex = i;

        // Iterate through the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            // Update the minIndex if a smaller element is found
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If minIndex is not the position of the current element, swap them
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
