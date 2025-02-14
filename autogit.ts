function countingSort(arr: number[], max: number): number[] {
    // Step 1: Create a count array with the size of max + 1 (to include max)
    const count: number[] = new Array(max + 1).fill(0);
    
    // Step 2: Store the count of each number in the count array
    for (const num of arr) {
        count[num]++;
    }
    
    // Step 3: Build the output array
    const output: number[] = [];
    for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
            output.push(i);
            count[i]--;
        }
    }
    
    return output;
}

// Example usage:
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const maxValue = Math.max(...inputArray);
const sortedArray = countingSort(inputArray, maxValue);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
