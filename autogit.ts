function countingSort(arr: number[], max: number): number[] {
    // Create a count array with size max + 1 (to include max value)
    const count: number[] = new Array(max + 1).fill(0);
    const output: number[] = new Array(arr.length);

    // Count the occurrences of each number in the input array
    for (const num of arr) {
        count[num]++;
    }

    // Modify the count array to hold the actual position of each number
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num] - 1] = num;
        count[num]--;
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr); // Determine maximum value in array
const sortedArray = countingSort(arr, max);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
