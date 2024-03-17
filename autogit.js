function countingSort(arr) {
    // Find the maximum value in the input array
    const max = Math.max(...arr);

    // Create an array to store the count of each unique element
    const counts = new Array(max + 1).fill(0);

    // Count the occurrences of each element in the input array
    arr.forEach((num) => counts[num]++);

    // Reconstruct the sorted array
    let result = [];
    counts.forEach((count, index) => {
        for (let i = 0; i < count; i++) {
            result.push(index);
        }
    });

    return result;
}

// Test the counting sort algorithm
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
