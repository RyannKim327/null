function countingSort(arr: number[], max: number): number[] {
    // Create an array to store the count of each number
    const count = new Array(max + 1).fill(0);
    
    // Count occurrences of each number in the input array
    for (let num of arr) {
        count[num]++;
    }

    // Rebuild the sorted array
    const sortedArr: number[] = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArr.push(i);
            count[i]--;
        }
    }

    return sortedArr;
}

// Example usage:
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const maxElement = Math.max(...inputArray);
const sortedArray = countingSort(inputArray, maxElement);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
