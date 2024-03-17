function countingSort(array) {
    let counts = [];
    let result = [];

    // Initialize counts array with zeros
    for (let i = 0; i < array.length; i++) {
        counts[array[i]] = (counts[array[i]] || 0) + 1;
    }

    // Accumulate counts 
    for (let i = 1; i < counts.length; i++) {
        counts[i] = (counts[i] || 0) + (counts[i - 1] || 0);
    }

    // Build the result array
    for (let i = array.length - 1; i >= 0; i--) {
        result[counts[array[i]] - 1] = array[i];
        counts[array[i]]--;
    }

    return result;
}

// Example usage
let array = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(array)); // Output: [1, 2, 2, 3, 3, 4, 8]
