function maxSubArray(arr) {
    let currentMax = arr[0];
    let globalMax = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        
        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
    }
    
    return globalMax;
}

// Example usage
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); // Output: 6
