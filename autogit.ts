function insertionSort(arr: number[]): number[] {
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // The current element to insert
        let j = i - 1;

        // Move elements greater than 'key' to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place 'key' at its correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
const myArray = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(myArray)); // Output: [1, 2, 5, 5, 6, 9]
