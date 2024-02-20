function quickSort(arr) {
    // Base case: If the array has 0 or 1 element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element (in this case, the last element)
    const pivot = arr[arr.length - 1];

    // Initialize left and right arrays
    const left = [];
    const right = [];

    // Iterate through the array and place elements in the left or right array based on whether they're less than or greater than the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quickSort to the left and right arrays, then concatenate the sorted left array, the pivot, and the sorted right array
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const unsortedArray = [3, 0, 2, 5, -1, 4, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [-1, 0, 1, 2, 3, 4, 5]
