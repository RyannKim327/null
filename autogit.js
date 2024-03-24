function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr[1];
}

// Example usage
const arr = [4, 6, 1, 9, 3, 7];
const secondLargest = findSecondLargest(arr);

console.log("Second largest element: ", secondLargest);
