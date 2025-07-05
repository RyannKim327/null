function insertionSort(arr: number[]): number[] {
    // Start from the second element as the first element is trivially sorted
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i]; // The element to be positioned
        let j = i - 1; // Start comparing with the elements in the sorted portion

        // Move elements that are greater than current, to one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the left in the sorted area
        }
        // Insert the current element into its correct position
        arr[j + 1] = current;
    }

    return arr; // Return the sorted array
}

// Example usage
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
