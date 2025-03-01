function insertionSort(arr: number[]): number[] {
    // Iterate from the second element to the end of the array
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;

        // Shift elements of arr[0..i-1] that are greater than currentValue
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place currentValue at the correct position
        arr[j + 1] = currentValue;
    }

    return arr;
}

// Example usage:
const arrayToSort = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(arrayToSort);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
