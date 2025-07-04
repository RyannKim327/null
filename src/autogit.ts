function quicksort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose the pivot (we'll use the last element in this implementation)
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    // Partitioning the array
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right sub-arrays and concatenate results
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage
const arrayToSort = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(arrayToSort);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
