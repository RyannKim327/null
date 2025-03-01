function countingSort(arr: number[], maxValue: number): number[] {
    // Create a count array to store count of each unique object
    const count: number[] = new Array(maxValue + 1).fill(0);
    
    // Store the count of each number
    for (const num of arr) {
        count[num]++;
    }
    
    // Build the output array
    const output: number[] = [];
    for (let i = 0; i <= maxValue; i++) {
        while (count[i] > 0) {
            output.push(i);
            count[i]--;
        }
    }
    
    return output;
}

// Example usage:
const arrayToSort = [4, 2, 2, 8, 3, 3, 1];
const maxValue = Math.max(...arrayToSort); // Determine the maximum value in the array
const sortedArray = countingSort(arrayToSort, maxValue);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
