function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let sorted = arr.slice();
    let buffer = new Array(arr.length);

    for (let step = 1; step < arr.length; step *= 2) {
        for (let start = 0; start < arr.length; start += 2 * step) {
            merge(sorted, buffer, start, start + step, start + 2 * step);
        }

        // Swap the buffers
        let temp = sorted;
        sorted = buffer;
        buffer = temp;
    }

    return sorted;
}

function merge(arr, buffer, start, middle, end) {
    let i = start;
    let j = middle;
    for (let k = start; k < end; k++) {
        if (i < middle && (j >= end || arr[i] <= arr[j])) {
            buffer[k] = arr[i];
            i++;
        } else {
            buffer[k] = arr[j];
            j++;
        }
    }
}

// Example usage:
const arr = [8, 3, 7, 4, 9, 2, 6, 5];
const sortedArray = mergeSort(arr);
console.log(sortedArray); // Output: [2, 3, 4, 5, 6, 7, 8, 9]
