function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1]; // Assuming array has at least two elements
}

// Test the function
const arr = [5, 2, 8, 1, 9, 4];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element is: " + secondLargest);
