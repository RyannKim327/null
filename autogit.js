function countingSort(arr) {
    const max = Math.max(...arr);
    const countArray = new Array(max + 1).fill(0);

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i]]++;
    }

    // Modify countArray to store actual position of elements
    for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1];
    }

    const sortedArray = new Array(arr.length);

    // Build the sorted array
    for (let i = arr.length - 1; i >= 0; i--) {
        sortedArray[countArray[arr[i]] - 1] = arr[i];
        countArray[arr[i]]--;
    }

    return sortedArray;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
