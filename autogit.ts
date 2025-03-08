function insertionSort(arr: number[]): number[] {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // The element to be compared
        let j = i - 1; // The index of the last sorted element

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Place the key in its correct position
    }
    return arr; // Return the sorted array
}

// Example usage:
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
