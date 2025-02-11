function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    const pivot = arr[arr.length - 1]; // Choosing the last element as the pivot
    const left: number[] = [];
    const right: number[] = [];

    // Partitioning the array based on the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than the pivot go to the left
        } else {
            right.push(arr[i]); // Elements greater than or equal to the pivot go to the right
        }
    }

    // Recursively sorting the left and right partitions and concatenating the results
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
