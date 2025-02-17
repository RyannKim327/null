function shellSort(arr: number[]): number[] {
    const n = arr.length;
    let gap = Math.floor(n / 2); // Start with a big gap, then reduce the gap

    // Keep reducing the gap until it's 0
    while (gap > 0) {
        // Perform a "gap-insertion sort" for this gap size
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;

            // Shift earlier gap-sorted elements Up until the correct location for arr[i] is found
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
