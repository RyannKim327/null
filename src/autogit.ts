function insertionSort(arr: number[]): number[] {
    // Traverse through 1 to arr.length
    for (let i = 1; i < arr.length; i++) {
        // The current element to be positioned
        const currentValue = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than currentValue,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }
        
        // Place currentValue at the right position
        arr[j + 1] = currentValue;
    }
    return arr; // Returning the sorted array
}

// Example usage
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
