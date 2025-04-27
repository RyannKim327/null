function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element of the unsorted part
        let minIndex = i;

        // Find the index of the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swapping elements
        }
    }

    return arr; // Return the sorted array
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Unsorted array:", array);
const sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);
