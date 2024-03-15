function mergeSortIterative(arr) {
    const n = arr.length;
    for (let currSize = 1; currSize < n; currSize *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
            const mid = Math.min(leftStart + currSize - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);
            merge(arr, leftStart, mid, rightEnd);
        }
    }
    return arr;
}

function merge(arr, leftStart, mid, rightEnd) {
    const n1 = mid - leftStart + 1;
    const n2 = rightEnd - mid;

    const leftArray = arr.slice(leftStart, mid + 1);
    const rightArray = arr.slice(mid + 1, rightEnd + 1);

    let i = 0, j = 0, k = leftStart;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
