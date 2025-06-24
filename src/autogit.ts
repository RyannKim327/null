function quicksort(arr: number[]): number[] {
    // Base case: if the array has 0 or 1 element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Choose a pivot (we'll use the last element as the pivot)
    const pivot = arr[arr.length - 1];

    // Step 2: Partition the array into two sub-arrays
    const left: number[] = [];  // Elements less than or equal to the pivot
    const right: number[] = []; // Elements greater than the pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Step 3: Recursively sort the left and right sub-arrays
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quicksort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Sorted Array: [5, 7, 23, 32, 34, 62]
