function quicksort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (here we choose the last element)
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

    // Recursively apply quicksort to the left and right arrays, and concatenate results
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
