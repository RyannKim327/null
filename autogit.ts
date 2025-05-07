function insertionSort(arr: number[]): number[] {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Take the current element
        let current = arr[i];
        // Initialize a variable to hold the position to insert
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element at the correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage
const array = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
