function countingSort(arr, max) {
    let count = new Array(max + 1).fill(0);
    let output = new Array(arr.length);
    
    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    
    // Calculate prefix sum
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    // Copy the output array back to the original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Example usage
let arr = [4, 2, 2, 8, 3, 3, 1];
let max = Math.max(...arr);

countingSort(arr, max);
console.log(arr); // Output: [1, 2, 2, 3, 3, 4, 8]
