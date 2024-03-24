function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });
    
    // Return the second element
    return arr[1];
}

// Test the function
const arr = [5, 10, 2, 8, 15];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element in the array is: ", secondLargest);
