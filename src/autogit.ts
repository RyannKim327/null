function insertionSort(arr: number[]): number[] {
    // Traverse through 1 to arr.length
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];   // The current element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Place the key in the correct position
    }
    return arr;
}

// Example usage
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
