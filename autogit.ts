function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2);

    // Start with a large gap, then reduce the gap
    while (gap > 0) {
        // Do a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            // save arr[i] in temp and make a hole at position i
            const temp = arr[i];
            let j;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        // Reduce the gap for the next step
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage
const arrayToSort = [12, 34, 54, 2, 3];
const sortedArray = shellSort(arrayToSort);
console.log(sortedArray);
