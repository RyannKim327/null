function quicksort(array: number[]): number[] {
    if (array.length <= 1) {
        return array; // Base case: arrays with 0 or 1 element are already sorted
    }

    const pivot = array[array.length - 1]; // Choose the last element as the pivot
    const left: number[] = [];  // Elements less than the pivot
    const right: number[] = []; // Elements greater than the pivot

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);  // Move elements less than pivot to left
        } else {
            right.push(array[i]); // Move elements greater than pivot to right
        }
    }

    // Recursively apply quicksort to left and right, and combine all parts
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
