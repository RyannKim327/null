function insertionSort(arr: number[]): number[] {
    const n = arr.length;

    // Traverse through 1 to n
    for (let i = 1; i < n; i++) {
        const key = arr[i]; // The element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Insert the key in its correct position
    }

    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
