function mergeSort(arr) {
    const n = arr.length;
    const tempArray = new Array(n);

    // Divide the array into subarrays of size 1, then merge them
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

            merge(arr, tempArray, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

function merge(arr, tempArray, leftStart, mid, rightEnd) {
    let i = leftStart;
    let j = mid + 1;
    let k = leftStart;

    while (i <= mid && j <= rightEnd) {
        if (arr[i] <= arr[j]) {
            tempArray[k++] = arr[i++];
        } else {
            tempArray[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        tempArray[k++] = arr[i++];
    }

    while (j <= rightEnd) {
        tempArray[k++] = arr[j++];
    }

    // Copy the merged elements back to the original array
    for (i = leftStart; i <= rightEnd; i++) {
        arr[i] = tempArray[i];
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr.slice()));
