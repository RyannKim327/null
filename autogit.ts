function shellSort(arr: number[]): number[] {
    const n = arr.length;

    // Start with a large gap, then reduce the gap
    let gap = Math.floor(n / 2);

    // Keep reducing the gap until it is 0
    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size.
        for (let i = gap; i < n; i++) {
            // Save the current element (to be compared)
            const temp = arr[i];
            let j: number;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        // Reduce gap
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
