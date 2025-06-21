function shellSort(arr: number[]): number[] {
    let n = arr.length;

    // Start with a large gap and reduce it over time
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // Store the current element
            let temp = arr[i];

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            let j: number;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // Place the stored element at its correct location
            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage:
const unsortedArray = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
const sortedArray = shellSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Sorted Array: [10, 14, 19, 26, 27, 31, 33, 35, 42, 44]
