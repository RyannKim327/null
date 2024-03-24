function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[1];
}

// Example usage
const numbers = [10, 5, 20, 15, 30];
const secondLargest = findSecondLargest(numbers);
console.log("Second largest element is:", secondLargest);
