function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n <= 1) return arr; // Already sorted

    // Create a temporary array to help with merging
    const temp = new Array(n);
    
    // The size of the subarrays to be merged starts at 1
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += size * 2) {
            // Define the left and right ends of the subarrays
            const mid = Math.min(leftStart + size, n);
            const rightEnd = Math.min(leftStart + size * 2, n);
            
            // Merge the two subarrays [leftStart, mid) and [mid, rightEnd)
            let left = leftStart;
            let right = mid;
            let index = leftStart;

            // Merge two halves into temp array
            while (left < mid && right < rightEnd) {
                if (arr[left] <= arr[right]) {
                    temp[index++] = arr[left++];
                } else {
                    temp[index++] = arr[right++];
                }
            }

            // Copy remaining elements of left half, if any
            while (left < mid) {
                temp[index++] = arr[left++];
            }

            // Copy remaining elements of right half, if any
            while (right < rightEnd) {
                temp[index++] = arr[right++];
            }

            // Copy the sorted subarray back into the original array
            for (let i = leftStart; i < rightEnd; i++) {
                arr[i] = temp[i];
            }
        }
    }
    
    return arr;
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);
