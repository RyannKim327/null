function mergeSortIterative(arr) {
    const n = arr.length;
    const tempArray = new Array(n);

    for (let sz = 1; sz < n; sz = 2 * sz) {
        for (let low = 0; low < n - 1; low += 2 * sz) {
            const mid = Math.min(low + sz - 1, n - 1);
            const high = Math.min(low + 2 * sz - 1, n - 1);

            merge(arr, low, mid, high, tempArray);
        }
    }

    return arr;
}

function merge(arr, low, mid, high, tempArray) {
    let i = low;
    let j = mid + 1;

    for (let k = low; k <= high; k++) {
        if (i > mid) {
            tempArray[k] = arr[j++];
        } else if (j > high) {
            tempArray[k] = arr[i++];
        } else if (arr[i] < arr[j]) {
            tempArray[k] = arr[i++];
        } else {
            tempArray[k] = arr[j++];
        }
    }

    for (let k = low; k <= high; k++) {
        arr[k] = tempArray[k];
    }
}

// Test the merge sort method
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(mergeSortIterative(arr));
