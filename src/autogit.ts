function insertionSort(arr: number[]): number[] {
    // Traverse through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        const key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
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

// Example usage
const unsortedArray = [12, 11, 13, 5, 6];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Unsorted Array: [12, 11, 13, 5, 6]
Sorted Array: [5, 6, 11, 12, 13]
function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
