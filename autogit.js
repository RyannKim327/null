function mergeSortIterative(arr) {
    // Split the input array into subarrays of size 1
    let n = arr.length;
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n - 1; left += 2 * size) {
            let middle = Math.min(left + size - 1, n - 1);
            let right = Math.min(left + 2 * size - 1, n - 1);
            merge(arr, left, middle, right);
        }
    }
    return arr;
}

function merge(arr, left, middle, right) {
    let n1 = middle - left + 1;
    let n2 = right - middle;
    
    let L = [];
    let R = [];

    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[middle + 1 + j];
    }

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr)); // [3, 9, 10, 27, 38, 43, 82]
