function insertionSort(arr: number[]): number[] {
    // Loop through each element in the array starting from index 1
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The current element to be inserted
        let j = i - 1; // Index of the last element in the sorted portion

        // Move elements that are greater than the key ahead by one position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert the key into its correct position
        arr[j + 1] = key;
    }
    return arr; // Return the sorted array
}

// Example usage:
const array = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(array)); // Output: [1, 2, 5, 5, 6, 9]
