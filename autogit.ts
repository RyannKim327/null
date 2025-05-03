function insertionSort(arr: number[]): number[] {
    // Start from the second element (index 1) as the first element is already sorted
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];  // The current element to be compared
        let j = i - 1;  // The index of the last element in the sorted portion
        
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead
        // of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place the key at after the last moved element
        arr[j + 1] = key;
    }
    
    return arr;  // Return the sorted array
}

// Example usage:
const unsortedArray: number[] = [5, 2, 9, 1, 5, 6];
const sortedArray: number[] = insertionSort(unsortedArray);
console.log(sortedArray);  // Output: [1, 2, 5, 5, 6, 9]
