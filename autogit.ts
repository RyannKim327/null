function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Start with a big gap

    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size.
        for (let i = gap; i < n; i++) {
            const temp = arr[i]; // Store the current element
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2); // Reduce the gap
    }

    return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
