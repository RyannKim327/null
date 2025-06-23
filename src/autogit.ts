function shellSort(arr: number[]): number[] {
    let n = arr.length;

    // Start with a large gap and reduce it over time
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform insertion sort for elements separated by the gap
        for (let i = gap; i < n; i++) {
            // Store the current element
            let temp = arr[i];
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Place the stored element at its correct location
            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage
const array = [12, 34, 54, 2, 3];
console.log("Original Array:", array);
const sortedArray = shellSort(array);
console.log("Sorted Array:", sortedArray);
Original Array: [12, 34, 54, 2, 3]
Sorted Array: [2, 3, 12, 34, 54]
