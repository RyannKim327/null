function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;
    const aux: number[] = new Array(n); // Auxiliary array for merging

    // Merge function to merge two sorted subarrays
    function merge(left: number, mid: number, right: number): void {
        // Copy the relevant portion of the array into the auxiliary array
        for (let i = left; i <= right; i++) {
            aux[i] = arr[i];
        }

        let i = left;    // Pointer for the left subarray
        let j = mid + 1; // Pointer for the right subarray
        let k = left;    // Pointer for the merged array

        // Merge the two subarrays
        while (i <= mid && j <= right) {
            if (aux[i] <= aux[j]) {
                arr[k++] = aux[i++];
            } else {
                arr[k++] = aux[j++];
            }
        }

        // Copy any remaining elements from the left subarray
        while (i <= mid) {
            arr[k++] = aux[i++];
        }

        // Remaining elements from the right subarray are already in place
    }

    // Iteratively merge subarrays of increasing sizes
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n - size; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, n - 1);
            merge(left, mid, right);
        }
    }

    return arr;
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array:", mergeSortIterative(array));
function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;
    const aux: number[] = new Array(n);

    function merge(left: number, mid: number, right: number): void {
        for (let i = left; i <= right; i++) aux[i] = arr[i];
        let i = left, j = mid + 1, k = left;
        while (i <= mid && j <= right) {
            arr[k++] = aux[i] <= aux[j] ? aux[i++] : aux[j++];
        }
        while (i <= mid) arr[k++] = aux[i++];
    }

    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n - size; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, n - 1);
            merge(left, mid, right);
        }
    }

    return arr;
}
