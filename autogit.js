function mergeSortIterative(arr) {
    const arrayLength = arr.length;

    for (let currentSize = 1; currentSize < arrayLength; currentSize *= 2) {
        for (let leftStart = 0; leftStart < arrayLength - 1; leftStart += 2 * currentSize) {
            const mid = Math.min(leftStart + currentSize - 1, arrayLength - 1);
            const rightEnd = Math.min(leftStart + 2 * currentSize - 1, arrayLength - 1);
            merge(arr, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

function merge(arr, leftStart, mid, rightEnd) {
    const leftArray = arr.slice(leftStart, mid + 1);
    const rightArray = arr.slice(mid + 1, rightEnd + 1);

    let i = 0, j = 0, k = leftStart;
    
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < leftArray.length) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightArray.length) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
