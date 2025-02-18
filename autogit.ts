function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Initialize gap size

    // Start with a big gap, then reduce the gap
    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // Add arr[i] to the elements that have been gap sorted
            // Save arr[i] in a temp variable
            const temp = arr[i];
            let j;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2); // Reduce the gap
    }
    return arr; // Return the sorted array
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = shellSort(array);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
