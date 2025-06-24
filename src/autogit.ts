function quickSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (here we pick the last element)
    const pivot = arr[arr.length - 1];

    // Partition the array into two subarrays
    const left: number[] = [];
    const right: number[] = [];

    // Compare each element with the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements smaller than the pivot go to the left
        } else {
            right.push(arr[i]); // Elements greater than or equal to the pivot go to the right
        }
    }

    // Recursively sort the left and right subarrays, then combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(unsortedArray);
console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
Unsorted Array: [34, 7, 23, 32, 5, 62]
Sorted Array: [5, 7, 23, 32, 34, 62]
