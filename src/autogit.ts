function countingSort(arr: number[]): number[] {
    // Step 1: Find the maximum value in the array to determine the range
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Step 2: Create a count array to store the frequency of each element
    const countArrayLength = max - min + 1;
    const count: number[] = new Array(countArrayLength).fill(0);

    // Step 3: Populate the count array with the frequency of each element
    for (const num of arr) {
        count[num - min]++;
    }

    // Step 4: Reconstruct the sorted array using the count array
    const sorted: number[] = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sorted.push(i + min);
            count[i]--;
        }
    }

    return sorted;
}

// Example usage:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
