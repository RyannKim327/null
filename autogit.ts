function countingSort(arr: number[], k: number): number[] {
    // Step 1: Create count array and initialize it to 0
    const count: number[] = new Array(k + 1).fill(0);
    const output: number[] = new Array(arr.length);
    
    // Step 2: Count occurrences of each number in arr
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Step 3: Update count[i] to be the position of this digit in output array
    for (let i = 1; i <= k; i++) {
        count[i] += count[i - 1];
    }

    // Step 4: Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const maxValue = Math.max(...arr);
const sortedArray = countingSort(arr, maxValue);
console.log(sortedArray);  // Output: [1, 2, 2, 3, 3, 4, 8]
