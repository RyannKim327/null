function shellSort(arr: number[]): number[] {
    const n = arr.length;
    // Start with a large gap and reduce the gap
    let gap = Math.floor(n / 2); // Initial gap

    // Start with the largest gap and reduce the gap
    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size
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

        // Reduce gap for the next iteration
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage:
const unsortedArray: number[] = [12, 34, 54, 2, 3];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 12, 34, 54]
