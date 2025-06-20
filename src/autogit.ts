function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return arr; // Handle empty array case

    // Step 1: Find the minimum and maximum values
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Step 2: Create the counting array
    const range = max - min + 1;
    const count: number[] = new Array(range).fill(0);

    // Step 3: Count occurrences of each element
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

// Example Usage
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(inputArray);
console.log("Sorted Array:", sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
