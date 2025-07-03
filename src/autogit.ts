function shellSort(arr: number[]): number[] {
    let n = arr.length;

    // Start with a large gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // Save the current element to be compared
            let temp = arr[i];
            let j;
            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage:
const myArray = [12, 34, 54, 2, 3];
console.log("Original array:", myArray);
const sortedArray = shellSort(myArray);
console.log("Sorted array:", sortedArray);
