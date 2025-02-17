function countingSort(arr: number[], max: number): number[] {
    const count: number[] = new Array(max + 1).fill(0);
    const output: number[] = new Array(arr.length);

    // Store the count of each number
    for (const num of arr) {
        count[num]++;
    }

    // Change count[i] so that it contains the position of this number in output[]
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

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr); // Find the maximum value in the array
const sortedArray = countingSort(arr, max);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
