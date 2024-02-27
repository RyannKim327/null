function countingSort(arr) {
    if (arr.length === 0) {
        return [];
    }

    // Find the maximum value in the input array
    let max = Math.max(...arr);

    // Create a count array to store the count of each element
    let count = new Array(max + 1).fill(0);

    // Store the count of each element in the input array
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Modify the count array to store the sum of previous counts
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Create a result array to store the sorted elements
    let result = new Array(arr.length);

    // Place the elements in the result array using the count array
    for (let i = arr.length - 1; i >= 0; i--) {
        result[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return result;
}

// Test the counting sort algorithm
let arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original array:", arr);
let sortedArr = countingSort(arr);
console.log("Sorted array:", sortedArr);
