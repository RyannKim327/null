function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const len = arr.length;
    const sorted = arr.slice();
    const buffer = new Array(len);

    for (let size = 1; size < len; size *= 2) {
        for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
            const leftEnd = Math.min(leftStart + size, len);
            const rightStart = leftEnd;
            const rightEnd = Math.min(rightStart + size, len);

            let i = leftStart;
            let j = rightStart;
            let k = leftStart;

            while (i < leftEnd && j < rightEnd) {
                if (sorted[i] <= sorted[j]) {
                    buffer[k++] = sorted[i++];
                } else {
                    buffer[k++] = sorted[j++];
                }
            }

            while (i < leftEnd) {
                buffer[k++] = sorted[i++];
            }

            while (j < rightEnd) {
                buffer[k++] = sorted[j++];
            }
        }

        const temp = sorted;
        sorted = buffer;
        buffer = temp;
    }

    return sorted;
}

// Test the mergeSort function
const unsortedArray = [8, 3, 5, 1, 9, 2, 6, 4, 7];
console.log("Unsorted array:", unsortedArray);
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted array:", sortedArray);
