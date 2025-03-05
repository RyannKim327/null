function shellSort(arr: number[]): number[] {
    const n = arr.length;

    // Start with a big gap, then reduce the gap
    let gap = Math.floor(n / 2);

    // Start with the largest gap and reduce it to 1
    while (gap > 0) {
        // Do a gapped insertion sort for this gap size.
        for (let i = gap; i < n; i++) {
            // Save the current element to be inserted
            let temp = arr[i];
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }

        // Reduce the gap for the next element
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage
const unsortedArray = [12, 34, 54, 2, 3];
const sortedArray = shellSort(unsortedArray);
console.log("Sorted array:", sortedArray);
