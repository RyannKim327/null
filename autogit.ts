function mergeSortIterative(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let n = arr.length;
    // Create a temporary array to hold the merged result
    const temp = new Array(n);

    // Size of the subarrays being merged (starts from 1)
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += size * 2) {
            // Define the left and right starting indices
            const mid = Math.min(leftStart + size, n);
            const rightEnd = Math.min(leftStart + size * 2, n);

            // Merge the two subarrays
            let left = leftStart;
            let right = mid;
            let index = leftStart;

            while (left < mid && right < rightEnd) {
                if (arr[left] <= arr[right]) {
                    temp[index++] = arr[left++];
                } else {
                    temp[index++] = arr[right++];
                }
            }

            // Copy any remaining elements on the left side
            while (left < mid) {
                temp[index++] = arr[left++];
            }

            // Copy any remaining elements on the right side
            while (right < rightEnd) {
                temp[index++] = arr[right++];
            }

            // Copy the merged subarray back into the original array
            for (let i = leftStart; i < rightEnd; i++) {
                arr[i] = temp[i];
            }
        }
    }

    return arr;
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray); // [3, 9, 10, 27, 38, 43, 82]
