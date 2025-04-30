function insertionSort(arr: number[]): number[] {
    // Traverse through 1 to arr.length
    for (let i = 1; i < arr.length; i++) {
        // Store the current element value
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0...i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Place the current element in its correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
const array = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 5, 6]
