function shellSort(arr: number[]): number[] {
    const n = arr.length;

    // Start with a large gap and reduce the gap
    let gap = Math.floor(n / 2);

    // Do a gapped insertion sort for this gap size.
    // The first gap elements arr[0..gap-1] are already in gapped order
    // keep adding one more element until the entire array is gap sorted
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            // save arr[i] in temp and make a hole at position i
            const temp = arr[i];
            let j = i;

            // shift earlier gap-sorted elements up until the correct location for arr[i] is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        // Reduce the gap for the next element
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage:
const arrayToSort = [12, 34, 54, 2, 3];
console.log('Original array:', arrayToSort);
const sortedArray = shellSort(arrayToSort);
console.log('Sorted array:', sortedArray);
