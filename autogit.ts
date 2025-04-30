function insertionSort(arr: number[]): number[] {
    const n = arr.length;

    // Start from the second element as the first element is already "sorted"
    for (let i = 1; i < n; i++) {
        const key = arr[i]; // The current element to be positioned
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key in its correct location
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
