function longestIncreasingSubsequence(arr) {
    let maxLength = 1;
    let lengths = new Array(arr.length);
    lengths.fill(1);
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
                lengths[i] = lengths[j] + 1;
                maxLength = Math.max(maxLength, lengths[i]);
            }
        }
    }
    
    let result = [];
    let maxIndex = lengths.indexOf(maxLength);
    result.unshift(arr[maxIndex]);
    
    for (let i = maxIndex - 1; i >= 0; i--) {
        if (arr[i] < arr[maxIndex] && lengths[i] === lengths[maxIndex] - 1) {
            result.unshift(arr[i]);
            maxIndex = i;
        }
    }
    
    return result;
}

// Example usage
const arr = [3, 10, 2, 1, 20];
console.log(longestIncreasingSubsequence(arr)); // Output: [3, 10, 20]
