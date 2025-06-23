function insertionSort(arr: number[]): number[] {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // The element to be placed in the correct position
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key in its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
