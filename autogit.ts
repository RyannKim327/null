function quicksort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element, here we take the last element as pivot
    const pivot = arr[arr.length - 1];

    // Create two sub-arrays for elements less than and greater than the pivot
    const left: number[] = [];
    const right: number[] = [];

    // Partition the array into left and right arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quicksort to left and right sub-arrays and concatenate results with pivot
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage
const array = [10, 7, 8, 9, 1, 5];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 5, 7, 8, 9, 10]
