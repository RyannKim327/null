function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Insert the key at its correct position
    }
    return arr;
}

// Example usage:
const array = [5, 2, 9, 1, 5, 6];
console.log("Unsorted Array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
