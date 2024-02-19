function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const len = arr.length;
    const sortedArr = [...arr];
    const buffer = new Array(len);

    for (let size = 1; size < len; size *= 2) {
        for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
            const left = leftStart;
            const middle = Math.min(left + size, len);
            const right = Math.min(left + 2 * size, len);

            merge(sortedArr, buffer, left, middle, right);
        }

        // Swap the arrays
        const temp = sortedArr;
        sortedArr = buffer;
        buffer = temp;
    }

    return sortedArr;
}

function merge(arr, buffer, left, middle, right) {
    let i = left;
    let j = middle;

    for (let k = left; k < right; k++) {
        if (i < middle && (j >= right || arr[i] <= arr[j])) {
            buffer[k] = arr[i];
            i++;
        } else {
            buffer[k] = arr[j];
            j++;
        }
    }
}

// Example usage
const arr = [5, 3, 8, 6, 2, 7, 1, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
