function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    let temp: number[] = new Array(n);
    
    // Starting with a size of 1, we keep merging
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += size * 2) {
            const mid = Math.min(leftStart + size - 1, n - 1);
            const rightEnd = Math.min(leftStart + size * 2 - 1, n - 1);
            merge(arr, temp, leftStart, mid, rightEnd);
        }
        // Copy the merged results back to the original array
        for (let i = 0; i < n; i++) {
            arr[i] = temp[i];
        }
    }
    return arr;
}

function merge(arr: number[], temp: number[], leftStart: number, mid: number, rightEnd: number) {
    let left = leftStart;
    let right = mid + 1;
    let index = leftStart;

    // Merging the two halves
    while (left <= mid && right <= rightEnd) {
        if (arr[left] <= arr[right]) {
            temp[index++] = arr[left++];
        } else {
            temp[index++] = arr[right++];
        }
    }

    // Copy remaining elements from the left half, if any
    while (left <= mid) {
        temp[index++] = arr[left++];
    }

    // Copy remaining elements from the right half, if any
    while (right <= rightEnd) {
        temp[index++] = arr[right++];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);
