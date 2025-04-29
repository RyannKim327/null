function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Start with a big gap, then reduce the gap

    // Start with the largest gap and reduce it
    while (gap > 0) {
        // Do a gapped insertion sort for this gap size.
        // The first gap elements arr[0..gap-1] are already in gapped order
        for (let i = gap; i < n; i++) {
            // Add arr[i] to the elements that have been gap sorted
            // Save arr[i] in temp and make a hole at position i
            const temp = arr[i];
            let j: number;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2); // Reduce the gap
    }

    return arr;
}

// Example Usage
const array = [12, 34, 54, 2, 3];
const sortedArray = shellSort(array);
console.log('Sorted Array:', sortedArray);
