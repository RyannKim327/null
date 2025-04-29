function countingSort(arr: number[], k: number): number[] {
    const n = arr.length;
    const output: number[] = new Array(n); // Output array
    const count: number[] = new Array(k + 1).fill(0); // Count array

    // Store the count of each number
    for (let i = 0; i < n; i++) {
        count[arr[i]] += 1; // Increment the count of the respective index
    }

    // Change count[i] so that it contains the actual position of this element in the output array
    for (let i = 1; i <= k; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]] -= 1;
    }

    return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const maxValue = Math.max(...arr); // Find the maximum value to define the range
const sortedArr = countingSort(arr, maxValue);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
