function countingSort(arr: number[], max: number): number[] {
    // Create an array to store the count of each number
    const count: number[] = new Array(max + 1).fill(0);

    // Count the occurrences of each number in the input array
    for (const num of arr) {
        count[num]++;
    }

    // Create an array for the sorted result
    const sortedArr: number[] = [];
    
    // Build the sorted array based on the counts
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArr.push(i);
            count[i]--;
        }
    }

    return sortedArr;
}

// Example usage
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const maxValue = Math.max(...inputArray);
const sortedArray = countingSort(inputArray, maxValue);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
