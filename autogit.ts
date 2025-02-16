function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Start with a large gap

    // Start with the largest gap and reduce it
    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2); // Reduce the gap for the next iteration
    }
    return arr;
}

// Example usage:
const unsortedArray = [12, 34, 54, 2, 3];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 12, 34, 54]
