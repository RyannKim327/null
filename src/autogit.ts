function quickSort(arr: number[]): number[] {
    // If the array is empty or has one element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (here we choose the last element)
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    // Partition the array into left and right
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right sub-arrays and concatenate with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arrayToSort = [5, 3, 8, 1, 2, 7];
const sortedArray = quickSort(arrayToSort);
console.log(sortedArray); // Output: [1, 2, 3, 5, 7, 8]
