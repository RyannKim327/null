function shellSort(array: number[]): number[] {
    const n = array.length;
    let gap = Math.floor(n / 2); // Start with a big gap

    // Continues until gap is reduced to 0
    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            const temp = array[i];
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for array[i] is found
            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
            }

            // Put temp (the original array[i]) in its correct location
            array[j] = temp;
        }

        // Reduce the gap for the next iteration
        gap = Math.floor(gap / 2);
    }

    return array;
}

// Example usage:
const unsortedArray = [12, 34, 54, 2, 3];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 12, 34, 54]
