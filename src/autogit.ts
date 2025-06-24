function quickSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a random pivot element
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];

    // Partition the array into three parts
    const less: number[] = [];
    const equal: number[] = [];
    const greater: number[] = [];

    for (const num of arr) {
        if (num < pivot) {
            less.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    // Recursively sort the 'less' and 'greater' partitions
    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62, 32, 2];
const sortedArray = quickSort(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
Unsorted Array: [34, 7, 23, 32, 5, 62, 32, 2]
Sorted Array: [2, 5, 7, 23, 32, 32, 34, 62]
