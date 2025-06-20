function insertionSort(arr: number[]): number[] {
    // Traverse through the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        const key = arr[i];
        // Initialize a pointer to the previous element
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than the key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
