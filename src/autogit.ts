function insertionSort(arr: number[]): number[] {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        const current = arr[i];
        // Initialize a variable to track the position to insert
        let j = i - 1;

        // Shift elements of the sorted segment upwards to make space
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Move larger elements one position forward
            j--;
        }
        // Insert the current element into its sorted position
        arr[j + 1] = current;
    }

    return arr; // Return the sorted array
}

// Example usage
const array: number[] = [12, 11, 13, 5, 6];
console.log('Original array:', array);
const sortedArray = insertionSort(array);
console.log('Sorted array:', sortedArray);
