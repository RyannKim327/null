function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr[1];
}

// Example
const numbers = [10, 5, 20, 8, 15];
const secondLargest = findSecondLargest(numbers);
console.log("Second largest element: ", secondLargest);
