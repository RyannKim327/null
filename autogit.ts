function shellSort(arr: number[]): number[] {
    const n = arr.length;

    // Start with a big gap, then reduce the gap
    let gap = Math.floor(n / 2);

    // Do a gapped insertion sort for this gap size.
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            // save arr[i] in temp and make a hole at position i
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
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = shellSort(array);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
