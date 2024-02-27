function countingSort(arr) {
    // Find the maximum value in the input array
    let max = Math.max(...arr);
    
    // Initialize count array with zeros
    let count = new Array(max + 1).fill(0);
    
    // Count the occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    
    // Modify the count array to store the actual position of each element in the sorted array
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    
    // Create a new array to store the sorted elements
    let sorted = new Array(arr.length);
    
    // Build the sorted array
    for (let i = 0; i < arr.length; i++) {
        sorted[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    return sorted;
}

// Test the countingSort function
let arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr)); // Output: [1, 2, 2, 3, 3, 4, 8]
