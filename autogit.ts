function insertionSort(arr: number[]): number[] {
    // Traverse through 1 to arr.length
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be positioned
        let j = i - 1;

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
const array = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
