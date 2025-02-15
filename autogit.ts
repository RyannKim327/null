function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Start with a big gap, then reduce the gap

    // Start with the largest gap and reduce the gap until it becomes 0
    while (gap > 0) {
        // Do a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // Save the current element to be compared
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
        gap = Math.floor(gap / 2); // Reduce the gap
    }
    return arr;
}

// Example usage:
const array = [5, 1, 4, 2, 8];
const sortedArray = shellSort(array);
console.log(sortedArray); // Output: [1, 2, 4, 5, 8]
