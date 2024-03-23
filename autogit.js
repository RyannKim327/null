function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

// Test the function
const arr = [3, 8, 1, 6, 5, 2];
console.log(findSecondLargest(arr)); // Output: 6
