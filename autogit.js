function countingSort(arr) {
    // Find the maximum value in the input array
    const max = Math.max(...arr);

    // Initialize count array with zeros
    const count = Array(max + 1).fill(0);

    // Count the occurrences of each element
    for (let num of arr) {
        count[num]++;
    }

    // Modify count array to store the actual position of the element in the output array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    const output = [];
    for (let num of arr) {
        output[count[num] - 1] = num;
        count[num]--;
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
