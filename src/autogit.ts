function shellSort(arr: number[]): number[] {
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // save arr[i] in temp and make a hole at position i
            let temp = arr[i];

            // shift earlier gap-sorted elements up until the correct location for arr[i] is found
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage:
const array = [23, 12, 1, 8, 34, 54, 2, 3];
console.log("Original array:", array);
const sortedArray = shellSort(array);
console.log("Sorted array:", sortedArray);
