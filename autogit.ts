function countingSort(arr: number[], maxNum: number): number[] {
    // Step 1: Create a counting array
    const count: number[] = new Array(maxNum + 1).fill(0);

    // Step 2: Store the count of each number in the count array
    for (let num of arr) {
        count[num]++;
    }

    // Step 3: Build the output array
    const output: number[] = [];
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            output.push(i);
        }
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const maxNum = Math.max(...arr);
const sortedArr = countingSort(arr, maxNum);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
