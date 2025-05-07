function shellSort(array: number[]): number[] {
    const n = array.length;

    // Start with a large gap, then reduce the gap
    let gap = Math.floor(n / 2); // Initial gap size

    // Do a gapped insertion sort for this gap size
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            // Save the value at the current index
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
        gap = Math.floor(gap / 2); // Reduce the gap
    }

    return array; // Return the sorted array
}

// Example usage
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = shellSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]
