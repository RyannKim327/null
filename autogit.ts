function quicksort(array: number[]): number[] {
    if (array.length <= 1) {
        return array; // Base case: an array of zero or one element is already sorted.
    }

    const pivot = array[array.length - 1]; // Choose the last element as the pivot.
    const left: number[] = []; // Elements less than the pivot
    const right: number[] = []; // Elements greater than the pivot

    for (let i = 0; i < array.length - 1; i++) { // Exclude the pivot
        if (array[i] < pivot) {
            left.push(array[i]); // Push smaller elements to the left array
        } else {
            right.push(array[i]); // Push larger elements to the right array
        }
    }

    // Recursively sort the left and right subarrays and combine them with the pivot
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
