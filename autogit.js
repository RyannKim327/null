function mergeSortIterative(array) {
    const n = array.length;

    // Merge subarrays of size 1, 2, 4, 8, ... until we reach the end
    for (let currSize = 1; currSize < n; currSize *= 2) {
        // Merge subarrays of size currSize
        for (let start = 0; start < n - 1; start += 2 * currSize) {
            // Determine the mid and end points of the subarrays
            const mid = Math.min(start + currSize - 1, n - 1);
            const end = Math.min(start + 2 * currSize - 1, n - 1);

            // Merge the subarrays
            merge(array, start, mid, end);
        }
    }

    return array;
}

// Merge function to combine two sorted subarrays into a single sorted subarray
function merge(array, start, mid, end) {
    const leftSize = mid - start + 1;
    const rightSize = end - mid;

    // Create temporary arrays to store the subarrays
    const leftArray = new Array(leftSize);
    const rightArray = new Array(rightSize);

    // Copy data from the original array to the temporary arrays
    for (let i = 0; i < leftSize; i++)
        leftArray[i] = array[start + i];
    for (let j = 0; j < rightSize; j++)
        rightArray[j] = array[mid + 1 + j];

    let i = 0; // Initial index of the left subarray
    let j = 0; // Initial index of the right subarray
    let k = start; // Initial index of the merged subarray

    // Merge the temporary arrays back into the original array
    while (i < leftSize && j < rightSize) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of the left subarray
    while (i < leftSize) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    // Copy the remaining elements of the right subarray
    while (j < rightSize) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
}
const array = [5, 3, 8, 4, 2, 1, 6];

console.log(mergeSortIterative(array)); // [1, 2, 3, 4, 5, 6, 8]
