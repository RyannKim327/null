function countingSort(arr) {
    let max = Math.max(...arr); // Find the maximum value in the array
    let min = Math.min(...arr); // Find the minimum value in the array

    let count = new Array(max - min + 1).fill(0); // Initialize count array with zeros

    // Count the occurrences of each element
    arr.forEach(num => {
        count[num - min]++;
    });

    // Modify count array to store the actual position of each element in the output array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    let output = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    // Copy the sorted elements back to the original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }

    return arr;
}

// Example usage
let arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original Array:", arr);
console.log("Sorted Array:", countingSort(arr));
