function shellSort(arr: number[]): number[] {
    const n = arr.length;
    // Start with the largest gap and reduce it
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;
            // Shift earlier gap-sorted elements up until the correct location is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }
    return arr;
}

// Example usage
const array = [5, 3, 8, 4, 2];
console.log("Unsorted array:", array);
const sortedArray = shellSort(array);
console.log("Sorted array:", sortedArray);
