function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Initial gap size

    // Start with a big gap, then reduce the gap
    while (gap > 0) {
        // Do a gapped insertion sort for this gap size.
        // The first gap elements arr[0..gap-1] are already in gapped order
        for (let i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            // save arr[i] in temp and make a hole at position i
            const temp = arr[i];
            let j: number;

            // shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2); // Reduce the gap
    }

    return arr;
}

// Example usage:
const arr = [12, 34, 54, 2, 3];
console.log("Unsorted array:", arr);
const sortedArr = shellSort(arr);
console.log("Sorted array:", sortedArr);
