function mergeSort(arr) {
    // Create a temporary array to store the sorted values
    let temp = new Array(arr.length);
    
    // Perform the merge sort
    for (let blockSize = 1; blockSize < arr.length; blockSize *= 2) {
        for (let startIndex = 0; startIndex < arr.length - blockSize; startIndex += 2 * blockSize) {
            let midIndex = startIndex + blockSize - 1;
            let endIndex = Math.min(startIndex + 2 * blockSize - 1, arr.length - 1);

            merge(arr, temp, startIndex, midIndex, endIndex);
        }
    }

    return arr;
}
function merge(arr, temp, start, mid, end) {
    let i = start;          // Index for the left subarray
    let j = mid + 1;        // Index for the right subarray
    let k = 0;              // Index for the temporary array

    // Merge the subarrays in sorted order
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp[k] = arr[i];
            i++;
        } else {
            temp[k] = arr[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements from the left subarray
    while (i <= mid) {
        temp[k] = arr[i];
        i++;
        k++;
    }

    // Copy the remaining elements from the right subarray
    while (j <= end) {
        temp[k] = arr[j];
        j++;
        k++;
    }

    // Copy the sorted elements back to the original array
    for (let x = 0; x < k; x++) {
        arr[start + x] = temp[x];
    }
}
let arr = [5, 3, 8, 4, 2, 1, 6, 7];
console.log("Original array:", arr);

let sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
