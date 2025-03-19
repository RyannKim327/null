function countingSort(arr: number[], max: number): number[] {
    // Step 1: Create a count array to store the count of each unique value
    const count: number[] = new Array(max + 1).fill(0);

    // Step 2: Store the count of each number in the input array
    for (const num of arr) {
        count[num]++;
    }

    // Step 3: Build the output array
    const output: number[] = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            output.push(i);
            count[i]--;
        }
    }

    return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr); // Find the maximum value in the array
const sortedArr = countingSort(arr, max);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
