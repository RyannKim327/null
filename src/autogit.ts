function shellSort(arr: number[]): number[] {
    const n = arr.length;

    // Start with a large gap and reduce it gradually
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j: number;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // Place temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage:
const array = [12, 34, 54, 2, 3];
console.log("Original Array:", array);
const sortedArray = shellSort(array);
console.log("Sorted Array:", sortedArray);
