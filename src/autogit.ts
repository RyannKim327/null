function quicksort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Choose a pivot (here we choose the last element)
    const pivot = arr[arr.length - 1];

    // Step 2: Partition the array into two subarrays
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than pivot go to the left
        } else {
            right.push(arr[i]); // Elements greater than or equal to pivot go to the right
        }
    }

    // Step 3: Recursively sort the left and right subarrays
    const sortedLeft = quicksort(left);
    const sortedRight = quicksort(right);

    // Step 4: Combine the sorted subarrays with the pivot
    return [...sortedLeft, pivot, ...sortedRight];
}

// Example usage
const unsortedArray = [10, 7, 8, 9, 1, 5];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray); // Output: [1, 5, 7, 8, 9, 10]
