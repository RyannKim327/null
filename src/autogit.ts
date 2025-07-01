function quickSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Choose a pivot (we'll use the last element for simplicity)
    const pivot = arr[arr.length - 1];

    // Step 2: Partition the array into two subarrays
    const left: number[] = [];  // Elements less than or equal to the pivot
    const right: number[] = []; // Elements greater than the pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Step 3: Recursively sort the subarrays and combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
