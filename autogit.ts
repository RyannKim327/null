function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are sorted
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Choosing the pivot
    const left = arr.filter(x => x < pivot); // Elements less than pivot
    const middle = arr.filter(x => x === pivot); // Elements equal to pivot
    const right = arr.filter(x => x > pivot); // Elements greater than pivot

    return [...quicksort(left), ...middle, ...quicksort(right)]; // Combine results
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
