function insertionSort(arr: number[]): number[] {
    const n = arr.length;

    // Loop from the second element to the end of the array
    for (let i = 1; i < n; i++) {
        const current = arr[i]; // Current element to be compared
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current element at its correct position
        arr[j + 1] = current;
    }

    return arr; // return the sorted array
}

// Example usage
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
