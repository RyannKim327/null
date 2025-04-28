function insertionSort(arr: number[]): number[] {
    // Iterate through the length of the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element in a variable
        const current = arr[i];

        // Find the position where current should be inserted in the sorted part
        let j = i - 1;

        // Shift elements of the sorted portion to the right to make space for current
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }

    return arr; // Return the sorted array
}

// Example usage:
const array = [5, 2, 4, 6, 1, 3];
console.log('Unsorted array:', array);
const sortedArray = insertionSort(array);
console.log('Sorted array:', sortedArray);
