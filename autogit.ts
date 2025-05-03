function quicksort(arr: number[]): number[] {
    // Base case: if the array is empty or has one element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element. Here, we'll choose the last element as the pivot.
    const pivot = arr[arr.length - 1];
    const left: number[] = [];  // Elements less than the pivot
    const right: number[] = []; // Elements greater than the pivot

    // Partition the array into two sub-arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Push to left if it's less than the pivot
        } else {
            right.push(arr[i]); // Otherwise, push to right
        }
    }

    // Recursively apply quicksort to the left and right sub-arrays
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
