function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });

    // Return the element at index 1
    return arr[1];
}

// Example usage
const arr = [10, 5, 20, 8, 15];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element:", secondLargest);
