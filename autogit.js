function mergeSort(arr) {
    const n = arr.length;
    const tempArray = new Array(n);
    let size = 1;

    while (size < n) {
        let left = 0;
        while (left < n - 1) {
            const mid = Math.min(left + size - 1, n - 1);
            const right = Math.min(left + 2 * size - 1, n - 1);
            merge(arr, left, mid, right, tempArray);
            left += 2 * size;
        }
        size *= 2;
    }

    return arr;
}

function merge(arr, left, mid, right, tempArr) {
    let i = left;
    let j = mid + 1;
    let k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
            tempArr[k++] = arr[i++];
        } else {
            tempArr[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        tempArr[k++] = arr[i++];
    }

    while (j <= right) {
        tempArr[k++] = arr[j++];
    }

    for (let p = 0; p < k; p++) {
        arr[left + p] = tempArr[p];
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
