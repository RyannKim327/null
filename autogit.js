function mergeSort(arr) {
    const n = arr.length;
    const temp = new Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            const leftEnd = Math.min(leftStart + size, n);
            const rightEnd = Math.min(leftStart + 2 * size, n);
            merge(arr, leftStart, leftEnd, rightEnd, temp);
        }
    }

    return arr;
}

function merge(arr, leftStart, leftEnd, rightEnd, temp) {
    let rightStart = leftEnd;
    let left = leftStart;
    let right = rightStart;
    let index = leftStart;

    while (left < leftEnd && right < rightEnd) {
        if (arr[left] < arr[right]) {
            temp[index++] = arr[left++];
        } else {
            temp[index++] = arr[right++];
        }
    }

    while (left < leftEnd) {
        temp[index++] = arr[left++];
    }

    while (right < rightEnd) {
        temp[index++] = arr[right++];
    }

    for (let i = leftStart; i < rightEnd; i++) {
        arr[i] = temp[i];
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
