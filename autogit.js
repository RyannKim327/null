function mergeSortIterative(arr) {
    const merge = (arr, start, mid, end) => {
        const leftArray = arr.slice(start, mid + 1);
        const rightArray = arr.slice(mid + 1, end + 1);

        let i = 0, j = 0, k = start;

        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k++] = leftArray[i++];
            } else {
                arr[k++] = rightArray[j++];
            }
        }

        while (i < leftArray.length) {
            arr[k++] = leftArray[i++];
        }

        while (j < rightArray.length) {
            arr[k++] = rightArray[j++];
        }
    };

    for (let size = 1; size < arr.length; size *= 2) {
        for (let start = 0; start < arr.length - 1; start += 2 * size) {
            const mid = Math.min(start + size - 1, arr.length - 1);
            const end = Math.min(start + 2 * size - 1, arr.length - 1);

            merge(arr, start, mid, end);
        }
    }

    return arr;
}

// Test the mergeSortIterative function
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr));
