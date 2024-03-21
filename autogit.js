function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });

    // Return the second element in the sorted array
    return arr[1];
}

// Example array
const arr = [10, 5, 8, 20, 15];

// Find the second largest element
const secondLargest = findSecondLargest(arr);
console.log("Second largest element: ", secondLargest);
