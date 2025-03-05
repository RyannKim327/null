function quickSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (we can choose the last element as a pivot)
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    // Partitioning the array into left and right arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right arrays and concatenate the results with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [10, 7, 8, 9, 1, 5];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 5, 7, 8, 9, 10]
