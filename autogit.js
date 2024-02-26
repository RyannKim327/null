function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });

    // Return the second element in the sorted array
    return arr[1];
}

// Example usage
const numbers = [10, 5, 20, 8, 15];
const secondLargest = findSecondLargest(numbers);

console.log("Second largest element is: " + secondLargest);
