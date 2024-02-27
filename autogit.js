function mergeSort(arr) {
    const len = arr.length;
    const aux = [...arr]; // create a copy of the original array to use as auxiliary space
    for (let size = 1; size < len; size *= 2) {
        for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
            const rightStart = Math.min(leftStart + size, len);
            const rightEnd = Math.min(leftStart + 2 * size, len);
            let i = leftStart;
            let j = rightStart;
            for (let k = leftStart; k < rightEnd; k++) {
                if (i < rightStart && (j >= rightEnd || aux[i] <= aux[j])) {
                    arr[k] = aux[i];
                    i++;
                } else {
                    arr[k] = aux[j];
                    j++;
                }
            }
        }
        [arr, aux] = [aux, arr]; // swap the main array and auxiliary array
    }
    return arr;
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // [3, 9, 10, 27, 38, 43, 82]
