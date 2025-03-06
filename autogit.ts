function shellSort(arr: number[]): number[] {
    const n = arr.length;
    
    // Start with a big gap, then reduce the gap
    let gap = Math.floor(n / 2); // Initial gap size

    // Do a gapped insertion sort for this gap size
    // The first gap elements arr[0..gap-1] are already in gapped order
    // Keep adding one more element until the entire array is gap sorted
    while (gap > 0) {
        // Do a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            // save arr[i] in temp and make a hole at position i
            const temp = arr[i];

            // shift earlier gap-sorted elements up until the correct location for arr[i] is found
            let j: number;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }

        gap = Math.floor(gap / 2); // Reduce gap size
    }

    return arr;
}

// Example usage
const array = [12, 34, 54, 2, 3];
console.log("Original array:", array);
const sortedArray = shellSort(array);
console.log("Sorted array:", sortedArray);
