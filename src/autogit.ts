function shellSort(arr: number[]): number[] {
    let n = arr.length;

    // Start with a large gap and reduce it over time
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform a gapped insertion sort for this gap size.
        for (let i = gap; i < n; i++) {
            // Store the current element to be positioned
            let temp = arr[i];
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Place the stored element at its correct location
            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage:
const unsortedArray = [12, 34, 54, 2, 3];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = shellSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
