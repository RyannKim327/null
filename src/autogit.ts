function insertionSort(arr: number[]): number[] {
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be compared
        let key = arr[i];
        // Initialize a variable to keep track of the position for insertion
        let j = i - 1;

        // Shift elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j = j - 1; // Move to the next element on the left
        }

        // Insert the key in its correct position
        arr[j + 1] = key;
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [12, 11, 13, 5, 6];
console.log("Original array:", arrayToSort);
const sortedArray = insertionSort(arrayToSort);
console.log("Sorted array:", sortedArray);
