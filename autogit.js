function mergeSort(arr) {
    const n = arr.length;
    const sortedArr = arr.slice(); // Create a copy of the original array to store sorted elements

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

            merge(sortedArr, leftStart, mid, rightEnd);
        }
    }

    return sortedArr;
}

function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < n1; i++) {
        leftArr.push(arr[left + i]);
    }

    for (let j = 0; j < n2; j++) {
        rightArr.push(arr[mid + 1 + j]);
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
