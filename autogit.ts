function quicksort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Choosing a pivot (here we choose the last element)
    const pivot = arr[arr.length - 1];
    
    // Arrays to hold values less than and greater than the pivot
    const left: number[] = [];
    const right: number[] = [];

    // Partitioning the array into two parts
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively applying quicksort to left and right partitions
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
