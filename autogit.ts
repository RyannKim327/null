function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return [];

    // Step 1: Find the maximum and minimum values
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;

    // Step 2: Initialize the count array
    const count: number[] = new Array(range).fill(0);

    // Step 3: Count the occurrences
    for (const num of arr) {
        count[num - min]++;
    }

    // Step 4: Modify the count array to become cumulative
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 5: Build the output array
    const output: number[] = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num - min] - 1] = num;
        count[num - min]--;
    }

    // Step 6: Copy the sorted elements back to the original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }

    return arr;
}

// Example usage:
const array = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
