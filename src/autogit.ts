function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    // Choosing the pivot (here, the middle element)
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    // Arrays to hold less, equal, and greater elements
    const less: number[] = [];
    const equal: number[] = [];
    const greater: number[] = [];

    for (const num of arr) {
        if (num < pivot) {
            less.push(num);
        } else if (num > pivot) {
            greater.push(num);
        } else {
            equal.push(num);
        }
    }

    // Recursively sort less and greater arrays and concatenate results
    return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Example usage:
const unsorted = [33, 10, 55, 71, 29, 3];
const sorted = quicksort(unsorted);
console.log(sorted);  // Output: [3, 10, 29, 33, 55, 71]
