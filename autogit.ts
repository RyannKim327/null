function insertionSort(arr: number[]): number[] {
    // Loop through each element in the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];
        // Initialize a variable to track the position where the current element will be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift the element one position to the right
            j--;
        }

        // Insert the current element at the correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage
const arrayToSort = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(arrayToSort);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
