function quicksort(arr: number[]): number[] {
    // Base case: if the array is empty or has one item, return it as is.
    if (arr.length <= 1) {
        return arr;
    }

    // Select a pivot (here we choose the last element)
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    // Partition the array into left and right
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than pivot
        } else {
            right.push(arr[i]); // Elements greater or equal to pivot
        }
    }

    // Recursively sort the left part and the right part, then concatenate with the pivot
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", arr);
console.log("Sorted array:", quicksort(arr));
