function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });

    // Return the second element (at index 1)
    return arr[1];
}

// Test the function
const array = [5, 10, 3, 8, 1];
const secondLargest = findSecondLargest(array);
console.log("Second Largest Element:", secondLargest);
