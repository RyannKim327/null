function shellSort(arr) {
    // Gap sequence for Shell Sort
    let gap = Math.floor(arr.length / 2);

    // Start with a larger gap and reduce it
    while (gap > 0) {
        // Perform insertion sort on elements with the gap
        for (let i = gap; i < arr.length; i++) {
            let current = arr[i];
            let j = i;

            // Shift elements with gap until the correct position is found
            while (j >= gap && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = current;
        }

        // Reduce the gap for the next iteration
        gap = Math.floor(gap / 2);
    }

    return arr; // Sorted array
}
const array = [7, 3, 9, 1, 6, 2, 8, 5, 4];
const sortedArray = shellSort(array);
console.log(sortedArray);
