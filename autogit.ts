function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Start with a big gap, then reduce the gap

    // Start with the largest gap and reduce it
    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // Add arr[i] to the elements that have been gap sorted
            const temp = arr[i]; // Store the current element
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        // Reduce the gap for the next iteration
        gap = Math.floor(gap / 2);
    }
    
    return arr;
}

// Example usage:
const arrayToSort = [5, 2, 9, 1, 5, 6];
const sortedArray = shellSort(arrayToSort);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
