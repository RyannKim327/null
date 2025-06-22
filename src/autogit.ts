function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return arr; // Handle empty array case

    // Step 1: Find the minimum and maximum values in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Step 2: Initialize the counting array
    const range = max - min + 1;
    const count: number[] = new Array(range).fill(0);

    // Step 3: Count the frequency of each element
    for (const num of arr) {
        count[num - min]++;
    }

    // Step 4: Reconstruct the sorted array
    const sortedArray: number[] = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArray.push(i + min);
            count[i]--;
        }
    }

    return sortedArray;
}

// Example usage:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
