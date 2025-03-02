function quicksort<T>(array: T[]): T[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Choose a pivot element (we can choose the last element here)
    const pivot = array[array.length - 1];
    const left: T[] = [];
    const right: T[] = [];

    // Partitioning the array into left and right arrays
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Recursively sort the left and right arrays and concatenate them with the pivot
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
