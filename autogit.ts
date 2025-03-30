function mergeSortIterative(arr: number[]): number[] {
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

function merge(arr: number[], left: number, mid: number, right: number) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

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
const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr);
