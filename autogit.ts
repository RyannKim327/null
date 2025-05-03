function insertionSort(arr: number[]): number[] {
    // Traverse from the second element to the end of the array
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // the element to be inserted
        let j = i - 1; // index of the last element in the sorted part

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key at its correct position
        arr[j + 1] = key;
    }
    
    return arr; // return the sorted array
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
