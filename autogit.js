function countingSort(arr) {
    // Find the max value in the input array
    let max = Math.max(...arr);

    // Create a count array to store the count of each element
    let count = new Array(max + 1).fill(0);

    // Count the occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Modify the count array to store the actual position of the element in the output array
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Create an output array to store the sorted elements
    let output = new Array(arr.length);

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

// Example usage:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
