function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left: number[] = []; // Elements less than the pivot
    const right: number[] = []; // Elements greater than the pivot

    // Partition the array into left and right arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Add to left if less than pivot
        } else {
            right.push(arr[i]); // Add to right if greater than or equal to pivot
        }
    }

    // Recursively sort the left and right arrays and concatenate the results
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arrayToSort: number[] = [5, 3, 8, 4, 2];
const sortedArray: number[] = quickSort(arrayToSort);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
