function insertionSort(arr: number[]): number[] {
    // Traverse from the second element to the end of the array
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be inserted
        let j = i - 1; // Start comparing with the previous element

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the next element on the left
        }
        arr[j + 1] = key; // Insert the key at its correct position
    }
    return arr; // Return the sorted array
}

// Example usage
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
