function quickSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (we'll pick the last element)
    const pivot = arr[arr.length - 1];

    // Partition the array into two sub-arrays:
    // - `left` contains elements less than or equal to the pivot
    // - `right` contains elements greater than the pivot
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right sub-arrays, then combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
Unsorted Array: [34, 7, 23, 32, 5, 62]
Sorted Array: [5, 7, 23, 32, 34, 62]
